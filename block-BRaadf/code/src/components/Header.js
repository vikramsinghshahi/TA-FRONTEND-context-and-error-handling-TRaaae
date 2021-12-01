// function Header({ isDarkMode }) {
//   return (
//     <h1 className={`heading ${isDarkMode ? "heading-dark" : "heading-light"}`}>
//       {isDarkMode ? "Dark Mode" : "Light Mode"}
//     </h1>
//   );
// }

// export default Header;

import { useContext } from 'react';
import UserContext from '../Context';

function Header()
{
  const user = useContext(UserContext)
  // console.log(isDarkMode, user)
  let isDarkMode = user.data.isDarkMode;
  return (
    <h1 className={`heading ${isDarkMode ? "heading-dark" : "heading-light"}`}>
      {isDarkMode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
