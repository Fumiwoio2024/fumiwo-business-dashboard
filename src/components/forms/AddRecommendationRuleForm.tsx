import { formatCardNumber } from "@helpers/functions/formatCardNumber";
import { PrimaryButton } from "@components/global/Buttons";
import Dropdown from "@components/global/Dropdown";
import Input from "@components/global/Input";
import { ChangeEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMUpdatePreferences } from "@hooks/api/mutations/app/preferences.mutation";
import { H4 } from "@components/global/Typography";
import { TBusinessUser } from "@type/global.types";

type TRule = TBusinessUser["preferences"]["recommendationRules"][0];
type TFormRangeType = "gte" | "lte" | "within";
const rangeType: { name: string; value: TFormRangeType }[] = [
  {
    name: "Above",
    value: "gte",
  },
  {
    name: "Below",
    value: "lte",
  },
  {
    name: "Between",
    value: "within",
  },
];
const decisionType = [
  {
    name: "Accept Condition",
    value: "accept",
  },
  {
    name: "Reject Condition",
    value: "reject",
  },
  {
    name: "Review Condition",
    value: "review",
  },
];

const defaultValues = {
  rule_name: "",
  accept_range_type: "",
  accept_credit_score: "",
  accept_credit_score_to: "",
  reject_range_type: "",
  reject_credit_score: "",
  reject_credit_score_to: "",
  review_range_type: "",
  review_credit_score: "",
  review_credit_score_to: "",
};

type TRecommendationRuleForm = {
  rule_name: string;
  accept_range_type: string;
  accept_credit_score: string;
  accept_credit_score_to: string;
  reject_range_type: string;
  reject_credit_score: string;
  reject_credit_score_to: string;
  review_range_type: string;
  review_credit_score: string;
  review_credit_score_to: string;
};

type TAddRecommendationRuleFormProps = {
  onClose: () => void;
  details: TRule | null;
};

const AddRecommendationRuleForm = ({
  onClose,
  details,
}: TAddRecommendationRuleFormProps) => {
  const selectedRuleValues = details
    ? {
        rule_name: details.name,
        accept_range_type: details.group.acceptCondition.operator,
        accept_credit_score: details.group.acceptCondition.threshold.toString(),
        accept_credit_score_to:
          details?.group.acceptCondition.upperThreshold?.toString(),
        reject_range_type: details.group.rejectCondition.operator,
        reject_credit_score: details.group.rejectCondition.threshold.toString(),
        reject_credit_score_to:
          details.group.rejectCondition.upperThreshold?.toString(),
        review_range_type: details.group.reviewCondition.operator,
        review_credit_score: details.group.reviewCondition.threshold.toString(),
        review_credit_score_to:
          details.group.reviewCondition.upperThreshold?.toString(),
      }
    : undefined;

  const { mutate, isPending } = useMUpdatePreferences();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm({
    defaultValues: details ? selectedRuleValues : defaultValues,
    mode: "onBlur",
  });

  const handleNumberInputChange =
    (type: keyof TRecommendationRuleForm) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const formattedValue = formatCardNumber(e.target.value.slice(0, 3));
      setValue(type, formattedValue, { shouldValidate: true });
    };

  const submitForm: SubmitHandler<TRecommendationRuleForm> = async (data) => {
    mutate(
      {
        recommendationRules: [
          {
            name: data.rule_name,
            group: {
              acceptCondition: {
                operator: data.accept_range_type as TFormRangeType,
                threshold: Number(data.accept_credit_score),
                upperThreshold:
                  data.accept_range_type === "within"
                    ? Number(data.accept_credit_score_to)
                    : undefined,
              },
              rejectCondition: {
                operator: data.reject_range_type as TFormRangeType,
                threshold: Number(data.reject_credit_score),
                upperThreshold:
                  data.reject_range_type === "within"
                    ? Number(data.reject_credit_score_to)
                    : undefined,
              },
              reviewCondition: {
                operator: data.review_range_type as TFormRangeType,
                threshold: Number(data.review_credit_score),
                upperThreshold:
                  data.review_range_type === "within"
                    ? Number(data.review_credit_score_to)
                    : undefined,
              },
            },
          },
        ],
      },
      {
        onSuccess: () => {
          reset();
          onClose();
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="w-[645px] space-y-6">
      <div className="space-y-5">
        <Input
          label="Rule Name"
          placeholder="Enter Rule Name"
          type="text"
          error={errors.rule_name?.message}
          {...register("rule_name", {
            required: "Rule name is required",
            minLength: {
              value: 3,
              message: "Rule name must be at least 3 characters",
            },
          })}
        />

        <section className="space-y-1.5">
          <H4 className="">{decisionType[0].name}</H4>

          <div className="flex items-end gap-3.5">
            <Dropdown
              noMessage
              placeholder="Select Range type"
              value={watch(`accept_range_type`)}
              options={rangeType}
              {...register(`accept_range_type`, {
                required: "Accept Range type is required",
              })}
            />

            <div className="flex w-full items-end gap-3">
              <Input
                noMessage
                placeholder={
                  watch("accept_range_type") === "between"
                    ? "From"
                    : "Enter Credit Score"
                }
                type="text"
                error={errors.accept_credit_score?.message}
                {...register("accept_credit_score", {
                  onChange: handleNumberInputChange("accept_credit_score"),
                  required: "Credit Score is required",
                  validate: (val, { accept_range_type }) =>
                    Number(val) >= 100 ||
                    (accept_range_type === "between"
                      ? "Lower Limit"
                      : "Credit Score") + " must be up to 100",
                })}
              />

              {watch("accept_range_type") === "between" && (
                <Input
                  noMessage
                  placeholder="To"
                  type="text"
                  error={errors.accept_credit_score_to?.message}
                  {...register("accept_credit_score_to", {
                    required: "Upper limit Credit Score is required",
                    onChange: handleNumberInputChange("accept_credit_score_to"),
                    validate: (val, { accept_credit_score }) =>
                      Number(accept_credit_score) < Number(val) ||
                      "Upper score limit must be higher than lower limit",
                  })}
                />
              )}
            </div>
          </div>

          {errors.accept_credit_score?.message && (
            <p className="mt-1 text-xs text-red-500">
              {errors.accept_credit_score?.message}
            </p>
          )}
          {errors.accept_credit_score_to?.message && (
            <p className="mt-1 text-xs text-red-500">
              {errors.accept_credit_score_to?.message}
            </p>
          )}
          {errors.accept_range_type?.message && (
            <p className="mt-1 text-xs text-red-500">
              {errors.accept_range_type?.message}
            </p>
          )}
        </section>

        <section className="space-y-1.5">
          <H4 className="">{decisionType[1].name}</H4>

          <div className="flex items-end gap-3.5">
            <Dropdown
              noMessage
              placeholder="Select Range type"
              value={watch(`reject_range_type`)}
              options={rangeType}
              {...register(`reject_range_type`, {
                required: "Reject Range type is required",
              })}
            />

            <div className="flex w-full items-end gap-3">
              <Input
                noMessage
                placeholder={
                  watch("reject_range_type") === "between"
                    ? "From"
                    : "Enter Credit Score"
                }
                type="text"
                error={errors.reject_credit_score?.message}
                {...register("reject_credit_score", {
                  onChange: handleNumberInputChange("reject_credit_score"),
                  required: "Credit Score is required",
                  validate: (val, { reject_range_type }) =>
                    Number(val) >= 100 ||
                    (reject_range_type === "between"
                      ? "Lower Limit"
                      : "Credit Score") + " must be up to 100",
                })}
              />

              {watch("reject_range_type") === "between" && (
                <Input
                  noMessage
                  placeholder="To"
                  type="text"
                  error={errors.reject_credit_score_to?.message}
                  {...register("reject_credit_score_to", {
                    required: "Upper limit Credit Score is required",
                    onChange: handleNumberInputChange("reject_credit_score_to"),
                    validate: (val, { reject_credit_score }) =>
                      Number(reject_credit_score) < Number(val) ||
                      "Upper score limit must be higher than lower limit",
                  })}
                />
              )}
            </div>
          </div>

          {errors.reject_credit_score?.message && (
            <p className="mt-1 text-xs text-red-500">
              {errors.reject_credit_score?.message}
            </p>
          )}
          {errors.reject_credit_score_to?.message && (
            <p className="mt-1 text-xs text-red-500">
              {errors.reject_credit_score_to?.message}
            </p>
          )}
          {errors.reject_range_type?.message && (
            <p className="mt-1 text-xs text-red-500">
              {errors.reject_range_type?.message}
            </p>
          )}
        </section>

        <section className="space-y-1.5">
          <H4 className="">{decisionType[2].name}</H4>

          <div className="flex items-end gap-3.5">
            <Dropdown
              noMessage
              placeholder="Select Range type"
              value={watch(`review_range_type`)}
              options={rangeType}
              {...register(`review_range_type`, {
                required: "Review Range type is required",
              })}
            />

            <div className="flex w-full items-end gap-3">
              <Input
                noMessage
                placeholder={
                  watch("review_range_type") === "between"
                    ? "From"
                    : "Enter Credit Score"
                }
                type="text"
                error={errors.review_credit_score?.message}
                {...register("review_credit_score", {
                  onChange: handleNumberInputChange("review_credit_score"),
                  required: "Credit Score is required",
                  validate: (val, { review_range_type }) =>
                    Number(val) >= 100 ||
                    (review_range_type === "between"
                      ? "Lower Limit"
                      : "Credit Score") + " must be up to 100",
                })}
              />

              {watch("review_range_type") === "between" && (
                <Input
                  noMessage
                  placeholder="To"
                  type="text"
                  error={errors.review_credit_score_to?.message}
                  {...register("review_credit_score_to", {
                    required: "Upper limit Credit Score is required",
                    onChange: handleNumberInputChange("review_credit_score_to"),
                    validate: (val, { review_credit_score }) =>
                      Number(review_credit_score) < Number(val) ||
                      "Upper score limit must be higher than lower limit",
                  })}
                />
              )}
            </div>
          </div>

          {errors.review_credit_score?.message && (
            <p className="mt-1 text-xs text-red-500">
              {errors.review_credit_score?.message}
            </p>
          )}
          {errors.review_credit_score_to?.message && (
            <p className="mt-1 text-xs text-red-500">
              {errors.review_credit_score_to?.message}
            </p>
          )}
          {errors.review_range_type?.message && (
            <p className="mt-1 text-xs text-red-500">
              {errors.review_range_type?.message}
            </p>
          )}
        </section>
      </div>

      <div className="!mt-12 space-y-3">
        <PrimaryButton
          loading={isPending}
          size="medium"
          className="w-full"
          type="submit"
        >
          Apply
        </PrimaryButton>
        {/* <BorderlessButton
          type="button"
          onClick={onClose}
          size="medium"
          className="w-full !text-red-500"
        >
          Cancel
        </BorderlessButton> */}
      </div>
    </form>
  );
};

export default AddRecommendationRuleForm;
