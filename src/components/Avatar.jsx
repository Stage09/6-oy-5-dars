import React from "react";

// === 1-misol ===

// const Avatar = ({ src, alt }) => (
//   <img src={src} alt={alt} className="w-10 h-10 rounded-full border-2 border-gray-300" />
// ); export default Avatar;


// === 2-misol ===

// const Greeting = ({ name = "Guest" }) => <h2>Hello, {name}!</h2>;
// export default Greeting;


// === 3-misol ===

// const Box = ({ width, height, color, children }) => (
//   <div style={{ width, height, backgroundColor: color, color: "white", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "8px" }}>
//     {children}
//   </div>
// );export default Box;



// === 4-misol ===

// const Button = (props) => {
//     return (
//       <button onClick={props.onClick} className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
//         {props.children}
//       </button>
//     );
//   };export default Button;


// === 5-misol ===

// const Card = (props) => {
//   return (
//     <div className="p-4 border rounded-lg shadow-md bg-white">
//       {props.children}
//     </div>
//   );
// };

// export default Card;


// === 6-misol ===

// const List = ({ items }) => (
//     <ul className="list-disc pl-5">
//       {items.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   ); export default List;


// === 7-misol ===

// const StatusMessage = ({ isSuccess }) => (
//   <p className={isSuccess ? "text-green-500" : "text-red-500"}>
//     {isSuccess ? "Success!" : "Error!"}
//   </p>
// ); export default StatusMessage;


// === 8-misol ===

// const Modal = ({ title, children }) => (
//   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//     <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//       <h2 className="text-xl font-bold mb-4">{title}</h2>
//       <div>{children}</div>
//     </div>
//   </div>
// ); export default Modal;


// === 10-misol ===

// const IconButton = ({ icon, type, onClick }) => {
//   return (
//     <button
//       type={type}
//       onClick={onClick}
//       className="p-2 rounded bg-blue-500 text-white flex items-center gap-2"
//     >
//       {icon && <span className="text-xl">{icon}</span>}
//       {type === "submit" ? "Submit" : type === "reset" ? "Reset" : "Button"}
//     </button>
//   );
// }; export default IconButton;

