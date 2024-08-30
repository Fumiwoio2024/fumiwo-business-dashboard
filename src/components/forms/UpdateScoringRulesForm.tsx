import { BorderlessButton, PrimaryButton } from "@components/global/Buttons";
import Dropdown from "@components/global/Dropdown";
import { useForm } from "react-hook-form";

const defaultValues = {
  variable_1: "",
  variable_2: "",
  variable_3: "",
  variable_4: "",
  variable_5: "",
};

const variableWeight = [
  {
    name: "10%",
    value: "10",
  },
  {
    name: "20%",
    value: "20",
  },
  {
    name: "30%",
    value: "30",
  },
  {
    name: "40%",
    value: "40",
  },
  {
    name: "50%",
    value: "50",
  },
];

type TUpdateScoringRulesForm = {
  onClose: () => void;
  details: typeof defaultValues | null;
};

const UpdateScoringRulesForm = ({
  onClose,
  details,
}: TUpdateScoringRulesForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: details || defaultValues,
    mode: "onBlur",
  });

  const submitForm = () => {
    onClose();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="w-[530px] space-y-5">
      <div className="flex items-center justify-between gap-14">
        <h5 className="w-full text-sm font-semibold">
          Variable Name (Phone brand):
        </h5>
        <Dropdown
          noMessage
          label="Decision weight"
          placeholder="Select weight"
          value={watch("variable_1")}
          options={variableWeight}
          error={errors.variable_1?.message}
          {...register("variable_1")}
        />
      </div>

      <div className="flex items-center justify-between gap-14">
        <h5 className="w-full text-sm font-semibold">
          Variable Name (Phone Manufacture year):
        </h5>
        <Dropdown
          noMessage
          label="Decision weight"
          placeholder="Select weight"
          value={watch("variable_2")}
          options={variableWeight}
          error={errors.variable_2?.message}
          {...register("variable_2")}
        />
      </div>

      <div className="flex items-center justify-between gap-14">
        <h5 className="w-full text-sm font-semibold">
          Variable Name (Phone brand):
        </h5>
        <Dropdown
          noMessage
          label="Decision weight"
          placeholder="Select weight"
          value={watch("variable_3")}
          options={variableWeight}
          error={errors.variable_3?.message}
          {...register("variable_3")}
        />
      </div>

      <div className="flex items-center justify-between gap-14">
        <h5 className="w-full text-sm font-semibold">
          Variable Name (Phone brand):
        </h5>
        <Dropdown
          noMessage
          label="Decision weight"
          placeholder="Select weight"
          value={watch("variable_4")}
          options={variableWeight}
          error={errors.variable_4?.message}
          {...register("variable_4")}
        />
      </div>

      <div className="flex items-center justify-between gap-14">
        <h5 className="w-full text-sm font-semibold">
          Variable Name (Phone brand):
        </h5>
        <Dropdown
          noMessage
          label="Decision weight"
          placeholder="Select weight"
          value={watch("variable_5")}
          options={variableWeight}
          error={errors.variable_5?.message}
          {...register("variable_5")}
        />
      </div>

      <div className="space-y-3 pt-1">
        <PrimaryButton size="medium" className="w-full" type="submit">
          Save
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

export default UpdateScoringRulesForm;
