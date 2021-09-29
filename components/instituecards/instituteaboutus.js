export const InstituteAboutus = ({ items }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h5 className="mb-2 mb-8 text-4xl font-extrabold leading-none md:pl-2">
        Features
        <br className="hidden md:block" />
        <span className="inline-block text-deep-purple-accent-400"></span>
      </h5>
      <div className="grid gap-3 row-gap-3 lg:grid-cols-3">
        {items.map((item, index) => {
          return (
            <div key={index}>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-1">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </span>
                  {item.title}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// <ul className="space-y-3">
// <li className="flex items-start">
//   <span className="mr-1">
//     <svg
//       className="w-5 h-5 mt-px text-deep-purple-accent-400"
//       stroke="currentColor"
//       viewBox="0 0 52 52"
//     >
//       <polygon
//         strokeWidth="4"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         fill="none"
//         points="29 13 14 29 25 29 23 39 38 23 27 23"
//       />
//     </svg>
//   </span>
//   Leverage agile frameworks to provide
// </li>
// <li className="flex items-start">
//   <span className="mr-1">
//     <svg
//       className="w-5 h-5 mt-px text-deep-purple-accent-400"
//       stroke="currentColor"
//       viewBox="0 0 52 52"
//     >
//       <polygon
//         strokeWidth="4"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         fill="none"
//         points="29 13 14 29 25 29 23 39 38 23 27 23"
//       />
//     </svg>
//   </span>
//   Dingy I'm tellin' you rhubaahb Bangah
// </li>
// <li className="flex items-start">
//   <span className="mr-1">
//     <svg
//       className="w-5 h-5 mt-px text-deep-purple-accent-400"
//       stroke="currentColor"
//       viewBox="0 0 52 52"
//     >
//       <polygon
//         strokeWidth="4"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         fill="none"
//         points="29 13 14 29 25 29 23 39 38 23 27 23"
//       />
//     </svg>
//   </span>
//   That is the true genius of America
// </li>
// </ul>
// <ul className="space-y-3">
{
  /* <li className="flex items-start">
  <span className="mr-1">
    <svg
      className="w-5 h-5 mt-px text-deep-purple-accent-400"
      stroke="currentColor"
      viewBox="0 0 52 52"
    >
      <polygon
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        points="29 13 14 29 25 29 23 39 38 23 27 23"
      />
    </svg>
  </span>
  We meet at one of those defining
</li>
<li className="flex items-start">
  <span className="mr-1">
    <svg
      className="w-5 h-5 mt-px text-deep-purple-accent-400"
      stroke="currentColor"
      viewBox="0 0 52 52"
    >
      <polygon
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        points="29 13 14 29 25 29 23 39 38 23 27 23"
      />
    </svg>
  </span>
  We did not go by choice, we went
</li>
<li className="flex items-start">
  <span className="mr-1">
    <svg
      className="w-5 h-5 mt-px text-deep-purple-accent-400"
      stroke="currentColor"
      viewBox="0 0 52 52"
    >
      <polygon
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        points="29 13 14 29 25 29 23 39 38 23 27 23"
      />
    </svg>
  </span>
  Those options are already baked in
</li>
</ul> */
}
