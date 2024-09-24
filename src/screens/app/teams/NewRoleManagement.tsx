import Badge from "@components/global/Badge";
import { PrimaryButton, SecondaryButton } from "@components/global/Buttons";
import Input from "@components/global/Input";
import ModalContainer from "@components/global/ModalContainer";
import Tables from "@components/global/Tables";
import { createColumnHelper } from "@tanstack/react-table";
import { TRole, TUser } from "@type/global.types";
import { useState } from "react";
import CreateRoleForm from "@components/forms/CreateRoleForm";
import ConfirmDeleteModal from "@components/modals/ConfirmDeleteModal";
import { Link } from "react-router-dom";
import { useQUsers } from "@hooks/api/queries/users.queries";
import { useMDeleteUser } from "@hooks/api/mutations/app/users.mutations";
import moment from "moment";
import { useDebounce } from "@hooks/custom/useDebounce";
import { useQRoles } from "@hooks/api/queries/role.queries";
import useClickOutside from "@hooks/custom/useClickOutside";
import { SingleActivityItem } from "@app-screens/reports/AuditLogs";
import { H3 } from "@components/global/Typography";

const NewRoleManagement = () => {
  const [isAddRoleModalVisible, setIsAddRoleModalVisible] = useState(false);
  // const [searchText, setSearchText] = useState("");
  const [isDeleteRoleModalVisible, setIsDeleteRoleModalVisible] =
    useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [selectedRole, setSelectedRole] = useState<TRole | null>(null);

  const { result } = useQRoles();
  const ref = useClickOutside(setOpenSideBar);

  // const debouncedSearch = useDebounce(searchText);
  // const { result, isLoading } = useQUsers({ name: debouncedSearch });
  // const { mutate: deleteUser } = useMDeleteUser();

  const columnHelper = createColumnHelper<TRole>();
  const columns = [
    columnHelper.accessor("name", {
      header: "Role",
    }),
    // columnHelper.accessor("role", {
    //   header: "Role",
    //   cell: (info) => info.row.original.role.name,
    // }),
    // columnHelper.accessor("createdAt", {
    //   header: "Date added",
    //   cell: (info) => moment(new Date(info.getValue())).format("MMM DD, YYYY"),
    // }),
    columnHelper.accessor("description", {
      header: "Description",
      // cell: (info) =>
      // moment(new Date(info.getValue())).format("MMM DD, YYYY, hh:mm A"),
    }),
    columnHelper.accessor("createdAt", {
      header: "Last modified",
      cell: (info) =>
        moment(new Date(info.getValue())).format("MMM DD, YYYY, hh:mm A"),
    }),

    columnHelper.accessor("id", {
      header: "Action",
      cell: (info) => (
        <div
          onClick={() => {
            setOpenSideBar(true);
            setSelectedRole(info.row.original);
          }}
          className="gap-5 text-secondaryButton underline hover:no-underline"
        >
          View details
        </div>
      ),
    }),
  ];

  return (
    <>
      {/* <ModalContainer
        title="Add Role"
        onClose={() => setIsAddRoleModalVisible(false)}
        isVisible={isAddRoleModalVisible}
      >
        <CreateRoleForm
          key={selectedUser?.id}
          details={selectedUser}
          onClose={() => setIsAddRoleModalVisible(false)}
        />
      </ModalContainer> */}

      {/* <ModalContainer
        title="Delete Role"
        onClose={() => setIsDeleteRoleModalVisible(false)}
        isVisible={isDeleteRoleModalVisible}
      >
        <ConfirmDeleteModal
          description="You are about to remove this user from your team. Are you sure about this?"
          onClose={() => setIsDeleteRoleModalVisible(false)}
          onConfirmDelete={() => selectedUser && deleteUser(selectedUser.id)}
        />
      </ModalContainer> */}
      <div className="w-full space-y-8 p-8">
        <section className="flex items-center justify-between">
          <div className="flex max-w-xs items-center gap-4">
            {/* <Input
              isSearch
              placeholder="Search Team"
              onChange={(e) => setSearchText(e.target.value)}
            /> */}

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
            <PrimaryButton
              onClick={() => {
                setSelectedUser(null);
                setIsAddRoleModalVisible(true);
              }}
              size="medium"
            >
              Add Role
            </PrimaryButton>
          </div>
        </section>

        <section>
          <div className="relative flex h-min overflow-x-hidden">
            <Tables columns={columns} data={result?.slice(0, 12) || []} />

            <div
              ref={ref}
              className={`border- absolute right-0 min-h-[700px] w-[450px] border bg-white transition duration-300 ${openSideBar ? "translate-x-0" : "translate-x-[500px]"}`}
            >
              <div className="space-y-6 px-6 py-3.5">
                <H3 className="text-sm">Permisions</H3>

                {selectedRole && (
                  <div className="grid grid-cols-2 justify-between gap-y-8 pr-10">
                    {selectedRole.permissions.map((permission) => (
                      <div
                        key={permission}
                        role="button"
                        className="flex items-center space-x-2"
                      >
                        <input
                          id={permission}
                          name={permission}
                          value={permission}
                          type="checkbox"
                          className="h-4 w-4 rounded text-indigo-600 accent-[#F9F5FF] outline-header focus:ring-indigo-300"
                        />
                        <label
                          htmlFor={permission}
                          className="text-sm font-medium capitalize text-graySubtext"
                        >
                          {permission.replace("-", " ")}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NewRoleManagement;
