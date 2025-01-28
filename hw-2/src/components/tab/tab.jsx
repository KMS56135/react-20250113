export const Tab = ({ title, onClick, isActive }) => {
  return (
    <>
      <button type="button" disabled={isActive} onClick={onClick}>
        {title}
      </button>
    </>
  );
};
