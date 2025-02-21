import React, { useState } from "react";
import Card from "./components/Avatar";

// === 1-misol ===

// function App() {
//   return (
//     <div className="flex items-center justify-center h-screen">
//       <Card src="https://i.ebayimg.com/images/g/HqUAAOSwnRFkdbcv/s-l1200.png" alt="User Profile" />
//     </div>
//   );
// } export default App;


// === 2-misol ===

// function App() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen space-y-4">
//       <Card /> {}
//       <Card name="Shahriyor" /> {}
//     </div>
//   );
// }export default App;


// === 3-misol ===

// function App() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen space-y-4">
//       <Card width="200px" height="100px" color="blue">Box 1</Card>
//       <Card width="250px" height="120px" color="green">Box 2</Card>
//       <Card width="180px" height="80px" color="red">Box 3</Card>
//     </div>
//   );
// } export default App;


// === 4-misol ===

// function App() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-2xl font-bold mb-4">Проверка Button</h1>
      
//       <Card onClick={() => alert("Clicked!")}>
//         Click Me
//       </Card>
//     </div>
//   );
// }export default App;



// === 5-misol ===

// function App() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-2xl font-bold mb-4">Проверка Card</h1>
//       <Card>
//         <h2 className="text-xl font-semibold">Title</h2>
//         <p className="text-gray-600">Some description...</p>
//       </Card>
//       <Card>
//         <button className="px-4 py-2 bg-blue-500 text-white rounded">
//           Click Me
//         </button>
//       </Card>
//      </div>); 
// } export default App;


// === 6-misol ===

// function App() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <Card items={['Apple', 'Banana', 'Cherry']} />
//     </div>
//   );
// } export default App;

// === 7-misol ===

// function App() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen space-y-4">
//       <Card isSuccess={true} />   
//       <Card isSuccess={false} /> 
//     </div>
//   );
// } export default App;


// === 8-misol ===

// function App() {
//   const [isOpen, setIsOpen] = useState(true);
//   return (
//     <div className="flex items-center justify-center h-screen">
//       {isOpen && (
//         <Card title="Delete Confirmation">
//           <p>Are you sure you want to delete?</p>
//           <div className="flex justify-end space-x-2 mt-4">
//             <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => setIsOpen(false)}>Yes</button>
//             <button className="px-4 py-2 bg-gray-300 rounded" onClick={() => setIsOpen(false)}>No</button>
//           </div>
//         </Card>
//       )}
//     </div>
//   ); } export default App;


// === 9-misol ===

// import withLogger from "./loger";
// import MyComponent from "./component";
// const EnhancedComponent = withLogger(MyComponent);
// function App() {
//   return (
//     <div className="flex items-center justify-center h-screen">
//       <EnhancedComponent />
//     </div>
//   );
// }export default App;


// === 10-misol ===

// function App() {
//   const [text, setText] = useState("");
//   return (
//     <div className="flex flex-col items-center gap-4 p-10">
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           alert(`Submitted: ${text}`);
//         }}
//       >
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           className="border p-2"
//           placeholder="Type something..."
//         />
//         <div className="flex gap-2 mt-2">
//           <Card icon="🚀" type="submit" />
//           <Card
//             icon="🔄"
//             type="reset"
//             onClick={() => setText("")}
//           />
//         </div>
//       </form>
//     </div>
//   );
// } export default App;

