import { dummyRoles, dummyTeamMembers } from "@/utils/data";
import CreateRoleForm from "@components/forms/CreateRoleForm";
import { SecondaryButton } from "@components/global/Buttons";
import Card from "@components/global/Card";
import GoBack from "@components/global/GoBack";
import ModalContainer from "@components/global/ModalContainer";
import { H5 } from "@components/global/Typography";
import ConfirmDeleteModal from "@components/modals/ConfirmDeleteModal";
import { TUser } from "@type/global.types";
import { Fragment, useState } from "react";

type TRole = {
  name: string;
  value: string;
};

const adminRoles = dummyRoles.slice(0, 2);
const otherDefaultRoles = dummyRoles.slice(2, 7);
const customRoles = dummyRoles.slice(7);

const SingleRole = ({
  role,
  selectedRole,
  setSelectedRole,
}: {
  role: TRole;
  selectedRole: TRole;
  setSelectedRole: (role: TRole) => void;
}) => {
  const isSelected = role.value === selectedRole.value;
  return (
    <div
      role="button"
      onClick={() => setSelectedRole(role)}
      className={`border-b-2 py-5 ${isSelected ? "border-primaryGreen font-semibold text-header" : "border-transparent text-graySubtext"}`}
    >
      {role.name}
    </div>
  );
};

const RoleManagement = () => {
  const [selectedRole, setSelectedRole] = useState(dummyRoles[0]);
  const [isCreateRoleModalVisible, setIsCreateRoleModalVisible] =
    useState(false);
  const [isDeleteMemberModalVisible, setIsDeleteMemberModalVisible] =
    useState(false);
  const [isEdit, setIsEdit] = useState(true);

  const user: TUser = JSON.parse(
    localStorage.getItem("fmw_business_user") || "{}",
  );

  return (
    <>
      <ModalContainer
        title={isEdit ? "Edit Role" : "Create Role"}
        onClose={() => setIsCreateRoleModalVisible(false)}
        isVisible={isCreateRoleModalVisible}
      >
        <CreateRoleForm
          key={`${selectedRole.value + isEdit}`}
          isEdit={isEdit}
          onClose={() => setIsCreateRoleModalVisible(false)}
          details={
            isEdit
              ? {
                  role_name: selectedRole.name,
                  role_description:
                    "This role has access to all admin functions",
                }
              : undefined
          }
        />
      </ModalContainer>
      <ModalContainer
        title="Delete member"
        onClose={() => setIsDeleteMemberModalVisible(false)}
        isVisible={isDeleteMemberModalVisible}
      >
        <ConfirmDeleteModal
          description="You are about to remove this role from your team. Are you sure about this?"
          onClose={() => setIsDeleteMemberModalVisible(false)}
          onConfirmDelete={() => setIsDeleteMemberModalVisible(false)}
        />
      </ModalContainer>

      <div className="w-full space-y-8 p-8">
        <GoBack />
        <Card className="flex w-full items-center gap-10 p-8 !pr-0">
          <div className="w-72 space-y-6">
            <H5 className="px-0.5 font-semibold">Default roles</H5>
            <div className="duration-300">
              {adminRoles.map((role) => (
                <Fragment key={role.value}>
                  <SingleRole
                    role={role}
                    selectedRole={selectedRole}
                    setSelectedRole={setSelectedRole}
                  />
                  <hr />
                </Fragment>
              ))}
            </div>
            <div className="duration-300">
              {otherDefaultRoles.map((role) => (
                <SingleRole
                  role={role}
                  key={role.value}
                  selectedRole={selectedRole}
                  setSelectedRole={setSelectedRole}
                />
              ))}
              <hr />
            </div>

            <div className="duration-300">
              {customRoles.map((role) => (
                <SingleRole
                  role={role}
                  key={role.value}
                  selectedRole={selectedRole}
                  setSelectedRole={setSelectedRole}
                />
              ))}
              <hr />
            </div>

            <SecondaryButton
              size="medium"
              onClick={() => {
                setIsEdit(false);
                setIsCreateRoleModalVisible(true);
              }}
            >
              Add new custom role
            </SecondaryButton>
          </div>

          <div className="w-full border-l p-8 pr-0">
            <div className="flex items-center justify-between pr-8">
              <H5 className="mb-3 font-semibold">{selectedRole.name}</H5>
              <div className="flex gap-6">
                <button
                  onClick={() => setIsDeleteMemberModalVisible(true)}
                  className="text-graySubtext/30 hover:text-red-500"
                >
                  <svg
                    width="28"
                    height="29"
                    viewBox="0 0 28 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.5003 8.35156C24.4769 8.35156 24.4419 8.35156 24.4069 8.35156C18.2353 7.73322 12.0753 7.49989 5.9736 8.11822L3.5936 8.35156C3.1036 8.39822 2.67193 8.04822 2.62527 7.55822C2.5786 7.06822 2.9286 6.64822 3.40693 6.60156L5.78693 6.36822C11.9936 5.73822 18.2819 5.98322 24.5819 6.60156C25.0603 6.64822 25.4103 7.07989 25.3636 7.55822C25.3286 8.01322 24.9436 8.35156 24.5003 8.35156Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.91493 7.17398C9.86826 7.17398 9.82159 7.17399 9.76326 7.16232C9.29659 7.08065 8.96993 6.62565 9.0516 6.15898L9.30826 4.63065C9.49493 3.51065 9.75159 1.95898 12.4699 1.95898H15.5266C18.2566 1.95898 18.5133 3.56898 18.6883 4.64232L18.9449 6.15898C19.0266 6.63732 18.6999 7.09232 18.2333 7.16232C17.7549 7.24398 17.2999 6.91732 17.2299 6.45065L16.9733 4.93398C16.8099 3.91898 16.7749 3.72065 15.5383 3.72065H12.4816C11.2449 3.72065 11.2216 3.88398 11.0466 4.92232L10.7783 6.43898C10.7083 6.87065 10.3349 7.17398 9.91493 7.17398Z"
                      fill="currentColor"
                    />
                    <path
                      d="M17.7468 27.0415H10.2568C6.18509 27.0415 6.02175 24.7898 5.89342 22.9698L5.13509 11.2215C5.10009 10.7432 5.47342 10.3232 5.95175 10.2882C6.44175 10.2648 6.85009 10.6265 6.88509 11.1048L7.64342 22.8532C7.77175 24.6265 7.81842 25.2915 10.2568 25.2915H17.7468C20.1968 25.2915 20.2434 24.6265 20.3601 22.8532L21.1184 11.1048C21.1534 10.6265 21.5734 10.2648 22.0518 10.2882C22.5301 10.3232 22.9034 10.7315 22.8684 11.2215L22.1101 22.9698C21.9818 24.7898 21.8184 27.0415 17.7468 27.0415Z"
                      fill="currentColor"
                    />
                    <path
                      d="M15.9358 20.625H12.0508C11.5724 20.625 11.1758 20.2283 11.1758 19.75C11.1758 19.2717 11.5724 18.875 12.0508 18.875H15.9358C16.4141 18.875 16.8108 19.2717 16.8108 19.75C16.8108 20.2283 16.4141 20.625 15.9358 20.625Z"
                      fill="currentColor"
                    />
                    <path
                      d="M16.9154 15.959H11.082C10.6037 15.959 10.207 15.5623 10.207 15.084C10.207 14.6057 10.6037 14.209 11.082 14.209H16.9154C17.3937 14.209 17.7904 14.6057 17.7904 15.084C17.7904 15.5623 17.3937 15.959 16.9154 15.959Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>

                <button
                  onClick={() => {
                    setIsEdit(true);
                    setIsCreateRoleModalVisible(true);
                  }}
                  className="text-graySubtext/30 hover:text-graySubtext"
                >
                  <svg
                    width="28"
                    height="29"
                    viewBox="0 0 28 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.4315 4.37548L3.30564 17.2103C2.84778 17.6977 2.40469 18.6577 2.31608 19.3224L1.7696 24.1077C1.57759 25.8358 2.81824 27.0173 4.53152 26.722L9.28735 25.9096C9.95198 25.7915 10.8825 25.3041 11.3403 24.8019L23.4662 11.9671C25.5635 9.75163 26.5088 7.22602 23.2447 4.13916C19.9953 1.08184 17.5288 2.16003 15.4315 4.37548Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.4062 6.51758C14.0413 10.594 17.3497 13.7104 21.4557 14.1239"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="space-y-4.5">
              <p className="text-lg text-graySubtext">
                This role has access to all admin functions
              </p>
              <hr />
              <div className="flex items-center gap-2">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.63338 9.55866C7.55005 9.55033 7.45005 9.55033 7.35838 9.55866C5.37505 9.49199 3.80005 7.86699 3.80005 5.86699C3.80005 3.82533 5.45005 2.16699 7.50005 2.16699C9.54172 2.16699 11.2 3.82533 11.2 5.86699C11.1917 7.86699 9.61672 9.49199 7.63338 9.55866Z"
                    stroke="#718096"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M13.675 3.83301C15.2916 3.83301 16.5916 5.14134 16.5916 6.74967C16.5916 8.32467 15.3417 9.60801 13.7833 9.66634C13.7167 9.65801 13.6417 9.65801 13.5667 9.66634"
                    stroke="#718096"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.4666 12.633C1.44993 13.983 1.44993 16.183 3.4666 17.5247C5.75827 19.058 9.5166 19.058 11.8083 17.5247C13.8249 16.1747 13.8249 13.9747 11.8083 12.633C9.52494 11.108 5.7666 11.108 3.4666 12.633Z"
                    stroke="#718096"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M15.2834 17.167C15.8834 17.042 16.4501 16.8003 16.9168 16.442C18.2168 15.467 18.2168 13.8587 16.9168 12.8837C16.4584 12.5337 15.9001 12.3003 15.3084 12.167"
                    stroke="#718096"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="text-lg text-graySubtext">
                  Team members on this role:
                </p>
                <div className="text-xxs font-semibold text-primaryBlack">
                  {[""].map((_, idx) => (
                    <div
                      key={idx}
                      className="rounded-full bg-graySubtext/25 px-3 py-1.5"
                    >
                      {user.name}
                    </div>
                  ))}
                </div>
              </div>

              <hr />

              <div className="space-y-6">
                <h4 className="text-sm font-semibold text-primaryBlack">
                  Permissions
                </h4>

                <div className="space-y-6">
                  {dummyTeamMembers[0].role.permissions.map((permissions) => (
                    <div
                      key={permissions}
                      role="button"
                      className="flex items-center space-x-2"
                    >
                      <input
                        id={permissions}
                        name={permissions}
                        value={permissions}
                        type="checkbox"
                        className="h-4 w-4 rounded text-indigo-600 accent-[#F9F5FF] outline-header focus:ring-indigo-300"
                      />
                      <label
                        htmlFor={permissions}
                        className="text-sm font-medium capitalize text-graySubtext"
                      >
                        {permissions.replace("-", " ")}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default RoleManagement;
