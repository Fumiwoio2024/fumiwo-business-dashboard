import { formatCardNumber } from "@helpers/functions/formatCardNumber";
import { BorderlessButton, PrimaryButton } from "@components/global/Buttons";
import Dropdown from "@components/global/Dropdown";
import Input from "@components/global/Input";
import { ChangeEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
const dummyRuleData = {
  credit_score: "231",
  credit_score_to: "250",
  decision_type: "accept",
  range_type: "between",
  rule_name: "Test Rule",
};

const rangeType = [
  {
    name: "Above",
    value: "above",
  },
  {
    name: "Below",
    value: "below",
  },
  {
    name: "Between",
    value: "between",
  },
];
const decisionType = [
  {
    name: "Accept",
    value: "accept",
  },
  {
    name: "Reject",
    value: "reject",
  },
];

const defaultValues = {
  rule_name: "",
  range_type: "",
  credit_score: "",
  credit_score_to: "",
  decision_type: "",
};
type TAddRecommendationRuleFormProps = {
  onClose: () => void;
  details: typeof defaultValues | null;
};

const AddRecommendationRuleForm = ({
  onClose,
  details,
}: TAddRecommendationRuleFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    watch,
  } = useForm({
    defaultValues: details ? dummyRuleData : defaultValues,
    mode: "onBlur",
  });

  const handleNumberInputChange =
    (
      type:
        | "rule_name"
        | "range_type"
        | "credit_score"
        | "credit_score_to"
        | "decision_type",
    ) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const formattedValue = formatCardNumber(e.target.value.slice(0, 3));
      setValue(type, formattedValue, { shouldValidate: true });
    };

  const submitForm: SubmitHandler<typeof defaultValues> = async (data) => {
    console.log(data);

    onClose();
    !details && reset();
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
            // pattern: {
            //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            //   message: "Invalid rule name",
            // },
          })}
        />

        <div className="flex items-end gap-3.5">
          <Dropdown
            noMessage
            label="Range type"
            placeholder="Select Range type"
            value={watch("range_type")}
            options={rangeType}
            {...register("range_type", {
              required: "Range type is required",
            })}
          />

          <div className="flex w-full items-end gap-3">
            <Input
              noMessage
              label="Credit Score"
              placeholder={
                watch("range_type") === "between"
                  ? "From"
                  : "Enter Credit Score"
              }
              type="text"
              error={errors.credit_score?.message}
              {...register("credit_score", {
                onChange: handleNumberInputChange("credit_score"),
                required: "Credit Score is required",
                validate: () =>
                  watch("range_type") === "between"
                    ? Number(watch("credit_score")) <
                      Number(watch("credit_score_to"))
                    : Number(watch("credit_score")) > 0,
              })}
            />

            {watch("range_type") === "between" && (
              <Input
                noMessage
                label=""
                placeholder="To"
                type="text"
                error={errors.credit_score_to?.message}
                {...register("credit_score_to", {
                  required: true,
                  onChange: handleNumberInputChange("credit_score_to"),
                  validate: () =>
                    Number(watch("credit_score")) <
                    Number(watch("credit_score_to")),
                })}
              />
            )}
          </div>

          <Dropdown
            noMessage
            label="Decision type"
            placeholder="Select decision"
            value={watch("decision_type")}
            options={decisionType}
            error={errors.decision_type?.message}
            {...register("decision_type", {
              required: "Decision type is required",
            })}
          />
        </div>
      </div>

      <div className="space-y-3">
        <PrimaryButton size="medium" className="w-full" type="submit">
          Apply
        </PrimaryButton>
        <BorderlessButton
          type="button"
          onClick={onClose}
          size="medium"
          className="w-full !text-red-500"
        >
          Cancel
        </BorderlessButton>
      </div>
    </form>
  );
};

export default AddRecommendationRuleForm;
