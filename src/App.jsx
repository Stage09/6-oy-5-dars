import React, { useState } from "react";

// === 1-misol ===

import Avatar from "./components/Avatar";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Avatar src="data:image/jpeg;base64,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" alt="User Profile" />
    </div>
  );
}
export default App;



// === 2-misol ===

// import Greeting from "./components/Greeting";

// function App() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen space-y-4">
//       <Greeting /> 
//       <Greeting name="Shahriyor" />
//     </div>
//   );
// }
// export default App;


// === 3-misol ===

// import Box from "./components/Box";

// function App() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen space-y-4">
//       <Box width="200px" height="100px" color="blue">Box 1</Box>
//       <Box width="250px" height="120px" color="green">Box 2</Box>
//       <Box width="180px" height="80px" color="red">Box 3</Box>
//     </div>
//   );
// }
// export default App;



// === 4-misol ===

// import Button from "./components/Button";

// function App() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-2xl font-bold mb-4">Проверка Button</h1>
      
//       <Button onClick={() => alert("Clicked!")}>
//         Click Me
//       </Button>
//     </div>
//   );
// }

// export default App;




// === 5-misol ===

// import Card from "./components/Card";

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
//     </div>
//   );
// }

// export default App;



// === 6-misol ===

// import List from "./components/List";
// function App() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <List items={['Apple', 'Banana', 'Cherry']} />
//     </div>
//   );
// }
// export default App;


// === 7-misol ===

// import StatusMessage from "./components/StatusMessage";
// function App() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen space-y-4">
//       <StatusMessage isSuccess={true} /> 
//       <StatusMessage isSuccess={false} /> 
//     </div>
//   );
// }
// export default App;



// === 8-misol ===

// import Modal from "./components/Modal";

// function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <button 
//         className="px-4 py-2 bg-blue-500 text-white rounded" 
//         onClick={() => setIsOpen(true)}
//       >
//         Open Modal
//       </button>

//       {isOpen && (
//         <Modal title="Delete Confirmation" onClose={() => setIsOpen(false)}>
//           <p>Are you sure you want to delete?</p>
//           <div className="flex justify-end space-x-2 mt-4">
//             <button 
//               className="px-4 py-2 bg-red-500 text-white rounded" 
//               onClick={() => setIsOpen(false)}
//             >
//               Yes
//             </button>
//             <button 
//               className="px-4 py-2 bg-gray-300 rounded" 
//               onClick={() => setIsOpen(false)}
//             >
//               No
//             </button>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// }

// export default App;


// === 9-misol ===

// import withLogger from "./components/withLogger";
// import MyComponent from "./components/MyComponent";

// const EnhancedComponent = withLogger(MyComponent);

// function App() {
//   return (
//     <div className="flex items-center justify-center h-screen">
//       <EnhancedComponent />
//     </div>
//   );
// }

// export default App;


// === 10-misol ===

// import IconButton from "./components/IconButton";

// function runner() {
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
//           <IconButton icon="🚀" type="submit" />
//           <IconButton
//             icon="🔄"
//             type="reset"
//             onClick={() => setText("")}
//           />
//         </div>
//       </form>
//     </div>
//   );
// }
// export default runner


