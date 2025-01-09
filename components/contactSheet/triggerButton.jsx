export const TriggerButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-5 z-10 bg-white text-gray-800 px-6 py-2 rounded-full shadow-lg transition-all"
    >
      Contact
    </button>
  );
};
