import DeprarmtentRoleSelection from "./DepartmentRoleSelection";

const DepartmentRole = () => {
  return (
    <div>
      <div>
        <DeprarmtentRoleSelection
          onSelectionComplete={(department, role, managerCode) => {
            console.log(department, role, managerCode);
          }}
        />
      </div>
    </div>
  );
};

export default DepartmentRole;
