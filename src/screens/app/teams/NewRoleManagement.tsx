import { PrimaryButton } from "@components/global/Buttons";
import Tables from "@components/global/Tables";
import { createColumnHelper } from "@tanstack/react-table";
import { TRole } from "@type/global.types";
import { useState } from "react";
import moment from "moment";

import { useQRoles } from "@hooks/api/queries/role.queries";
import useClickOutside from "@hooks/custom/useClickOutside";

import { H3 } from "@components/global/Typography";
import { toast } from "react-toastify";
import ModalContainer from "@components/global/ModalContainer";
import CreateRoleForm from "@components/forms/CreateRoleForm";
import Checkbox from "@components/global/CheckBox";

const NewRoleManagement = () => {
  const [isAddRoleModalVisible, setIsAddRoleModalVisible] = useState(false);
  // const [searchText, setSearchText] = useState("");
  // const [isDeleteRoleModalVisible, setIsDeleteRoleModalVisible] =
  //   useState(false);
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
      <ModalContainer
        title="Add Role"
        onClose={() => setIsAddRoleModalVisible(false)}
        isVisible={isAddRoleModalVisible}
      >
        <CreateRoleForm
          // key={}
          // details={selectedRole}
          isEdit={!!selectedRole}
          onClose={() => setIsAddRoleModalVisible(false)}
        />
      </ModalContainer>

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
            <p onClick={() => toast.error("Coming soon")}>Toast</p>
          </div>

          <div className="flex gap-4.5">
            <PrimaryButton
              onClick={() => {
                setSelectedRole(null);
                setIsAddRoleModalVisible(true);
              }}
              size="medium"
            >
              Add Role
            </PrimaryButton>
          </div>
        </section>

        <section className="h-mi relative flex min-h-[700px] overflow-x-hidden">
          <Tables columns={columns} data={result?.slice(0, 12) || []} />

          <div
            ref={ref}
            className={`border- absolute right-0 h-full w-[450px] border bg-white transition duration-300 ${openSideBar ? "translate-x-0" : "translate-x-[500px]"}`}
          >
            <div className="space-y-6 px-6 py-3.5">
              <H3 className="text-sm">Permisions</H3>

              {selectedRole && (
                <div className="grid grid-cols-1 justify-between gap-y-4 pr-10">
                  {selectedRole.permissions.map((permission) => (
                    <div
                      key={permission}
                      role="button"
                      className="flex items-center space-x-2"
                    >
                      {/* <input
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
                        </label> */}
                      <Checkbox
                        label={permission}
                        checked={true}
                        setChecked={() => {}}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default NewRoleManagement;
