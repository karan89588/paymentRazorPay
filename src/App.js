import "./App.css";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000/api";
function App() {
  const handleClick = async () => {
    const key_id = await axios.get("/key_id");
    const data = await axios.post("/checkout", { amount: 500 });
    console.log(
      "order",
      key_id.data.key_id,
      data.data.order.amount,
      data.data.order.id
    );
    const options = {
      key: key_id.data.key_id, // Enter the Key ID generated from the Dashboard
      amount: data.data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Item",
      description: "Testing Name",
      image:
        "https://www.wpbeginner.com/wp-content/uploads/2019/07/howtogeturlofimagesyouuploadinwordpress.png",
      order_id: data.data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:8000/api/verify",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    console.log(options);
    const razor = new window.Razorpay(options);
    razor.open();
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Pay</button>
    </div>
  );
}

export default App;
