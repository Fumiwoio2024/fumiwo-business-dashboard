import { dummyTeamMembers } from "@/utils/data";
import Badge from "@components/global/Badge";
import { PrimaryButton, SecondaryButton } from "@components/global/Buttons";
import Input from "@components/global/Input";
import ModalContainer from "@components/global/ModalContainer";
import Tables from "@components/global/Tables";
import { createColumnHelper } from "@tanstack/react-table";
import { TUser } from "@type/global.types";
import { useState } from "react";
import AddTeamMemberForm from "@components/forms/AddTeamMemberForm";
import ConfirmDeleteModal from "@components/modals/ConfirmDeleteModal";
import { Link } from "react-router-dom";

const TeamHome = () => {
  const [isAddMemberModalVisible, setIsAddMemberModalVisible] = useState(false);
  const [isDeleteMemberModalVisible, setIsDeleteMemberModalVisible] =
    useState(false);
  const [selectedUser, setSelectedUser] = useState<TUser | null>(null);

  const columnHelper = createColumnHelper<TUser>();

  const columns = [
    columnHelper.accessor("firstName", {
      header: "Name",
      cell: (info) => (
        <div className="flex gap-5">
          <div className="space-y-1.5">
            <p className="text-sm font-bold text-paraGray/80">
              {info.getValue()
                ? `${info.getValue()} ${info.row.original.lastName}`
                : info.row.original.business?.name}
            </p>
            <p className="text-xs font-normal text-graySubtext">
              {info.row.original.email}
            </p>
          </div>
          {info.getValue()?.includes("p") && (
            <Badge type="warning" className="h-fit font-semibold">
              Invited
            </Badge>
          )}
        </div>
      ),
    }),
    columnHelper.accessor("role.name", {
      header: "Role",
      cell: (info) => info.row.original.role.name,
    }),
    columnHelper.accessor("_createdAt", {
      header: "Date added",
    }),
    columnHelper.accessor("lastModifiedAt", {
      header: "Last activity",
    }),
    columnHelper.accessor(() => "action", {
      header: "Action",
      cell: (info) => (
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
              setIsAddMemberModalVisible(true);
              setSelectedUser(info.row.original);
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
      ),
    }),
  ];

  return (
    <>
      <ModalContainer
        title="Add member"
        onClose={() => setIsAddMemberModalVisible(false)}
        isVisible={isAddMemberModalVisible}
      >
        <AddTeamMemberForm
          key={selectedUser?.id}
          details={selectedUser}
          onClose={() => setIsAddMemberModalVisible(false)}
        />
      </ModalContainer>

      <ModalContainer
        title="Delete member"
        onClose={() => setIsDeleteMemberModalVisible(false)}
        isVisible={isDeleteMemberModalVisible}
      >
        <ConfirmDeleteModal
          description="You are about to remove this user from your team. Are you sure about this?"
          onClose={() => setIsDeleteMemberModalVisible(false)}
          onConfirmDelete={() => setIsDeleteMemberModalVisible(false)}
        />
      </ModalContainer>
      <div className="w-full space-y-8 p-8">
        <section className="flex items-center justify-between">
          <div className="flex max-w-xs items-center gap-4">
            <Input isSearch placeholder="Search Team" />

            {/* <button>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 28.5H21V25.5H15V28.5ZM9 19.5H27V16.5H9V19.5ZM4.5 7.5V10.5H31.5V7.5H4.5Z"
                  fill="currentColor"
                />
              </svg>
            </button> */}
          </div>

          <div className="flex gap-4.5">
            <Link to="manage-roles">
              <SecondaryButton size="medium">Manage Role</SecondaryButton>
            </Link>
            <PrimaryButton
              onClick={() => {
                setSelectedUser(null);
                setIsAddMemberModalVisible(true);
              }}
              size="medium"
            >
              Add member
            </PrimaryButton>
          </div>
        </section>

        <section>
          <div className="">
            <Tables
              columns={columns}
              data={dummyTeamMembers as unknown as TUser[]}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamHome;
