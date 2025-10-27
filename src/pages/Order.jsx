import Header from "../components/Header";
import OrderSummaryCard from "../components/OrderSummaryCard";
import ProductCardOrder from "../components/ProductCardOrder";

const Order = () => {
  const header = <Header></Header>
  const orderSummaryCard = <OrderSummaryCard></OrderSummaryCard>
  const productCardOrder = <ProductCardOrder></ProductCardOrder>

  return (
    <div id="inicio">
      {header}
      <main className="flex flex-col pt-30 h-screen w-[60vw] mx-auto">
        <h1 className="text-6xl font-semibold">Pedidos</h1>
        <h3 className="text-gray-600">productos pedidos</h3>
        <section className="grid grid-cols-3 mt-12">
          <div className="col-span-2">
            {productCardOrder}
          </div>
          {orderSummaryCard}
        </section>
      </main>
    </div>
  );
}

export default Order;