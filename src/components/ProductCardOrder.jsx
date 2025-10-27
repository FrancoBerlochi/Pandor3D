// No usar PROPS se usa LocalStorage es para que no rompa el react

const ProductCardOrder = ({ img, title, price, amount }) => {
  return (
    <div className="flex border-1 border-gray-300">
      <img src={img} alt="" />
      <div className="flex flex-col">
        <h2>{title}</h2>
        <p>{price}</p>
        <div className="flex gap-4">
          <p>{amount}</p>
          <button className="flex gap-2 py-2 px-4 text-red-400 hover:text-red-600 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-trash2-icon lucide-trash-2"
            >
              <path d="M10 11v6" />
              <path d="M14 11v6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
              <path d="M3 6h18" />
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );

}
export default ProductCardOrder;