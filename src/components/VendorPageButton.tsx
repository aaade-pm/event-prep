const VendorPageButton = ({ text }: { text: string }) => {
  return (
    <>
      <div className="v-button">
        <button> {text}</button>
      </div>
    </>
  );
};

export default VendorPageButton;
