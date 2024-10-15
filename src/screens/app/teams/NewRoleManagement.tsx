import Tables from "@components/global/Tables";
import { createColumnHelper } from "@tanstack/react-table";
import { TRole } from "@type/global.types";
import { useState } from "react";
import moment from "moment";

import { useQRoles } from "@hooks/api/queries/role.queries";
import useClickOutside from "@hooks/custom/useClickOutside";

import { H3 } from "@components/global/Typography";
import ModalContainer from "@components/global/ModalContainer";
import CreateRoleForm from "@components/forms/CreateRoleForm";
import Checkbox from "@components/global/CheckBox";
import BreadCrumb from "@components/global/BreadCrumb";

const roleLinks = [
  { name: "Default roles", path: "default" },
  { name: "Custom roles", path: "custom" },
];

const NewRoleManagement = () => {
  const [isAddRoleModalVisible, setIsAddRoleModalVisible] = useState(false);
  const [tab, setTab] = useState("default");
  // const [searchText, setSearchText] = useState("");
  // const [isDeleteRoleModalVisible, setIsDeleteRoleModalVisible] =
  //   useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [selectedRole, setSelectedRole] = useState<TRole | null>(null);

  const { result: roles } = useQRoles();
  const ref = useClickOutside(setOpenSideBar);
  const result = roles?.filter((role) =>
    tab === "default" ? !role.isCustom : role.isCustom,
  );

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
    }),
    columnHelper.accessor("lastModifiedAt", {
      header: "Last modified",
      cell: (info) => {
        const value = info.getValue();
        return value
          ? moment(new Date(value)).format("MMM DD, YYYY, hh:mm A")
          : "N/A";
      },
    }),

    columnHelper.accessor("id", {
      header: "Action",
      cell: (info) => (
        <button
          onClick={() => {
            setOpenSideBar(true);
            setSelectedRole(info.row.original);
          }}
          className="gap-5 text-secondaryButton underline hover:no-underline"
        >
          View details
        </button>
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
          // details={selectedRole}
          isEdit={!!selectedRole}
          onClose={() => setIsAddRoleModalVisible(false)}
        />
      </ModalContainer>

      <div className="w-full space-y-8 p-8">
        <BreadCrumb />

        <section className="flex items-center justify-between">
          <div className="border-b">
            <div className="flex gap-8">
              {roleLinks.map((link) => (
                <div
                  role="button"
                  key={link.path}
                  onClick={() => setTab(link.path)}
                  className={`block border-b-2 p-2.5 transition-colors duration-300 ${[
                    tab === link.path
                      ? "border-primaryGreen font-medium text-header"
                      : "border-transparent text-paraGray",
                  ].join(" ")}`}
                >
                  {link.name}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              setSelectedRole(null);
              setIsAddRoleModalVisible(true);
            }}
            className="mx-5 gap-5 text-secondaryButton duration-300 hover:text-secondaryButton/50"
          >
            Create custom role
          </button>
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
