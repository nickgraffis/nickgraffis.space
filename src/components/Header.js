import Parser from 'html-react-parser';

function Header (props) {
  return <>
    <p className="text-5xl lg:text-7xl md:text-7xl font-bold text-left mb-4 mt-6 text-gray-800 dark:text-cullen">
      {props.title}
    </p>
    <p className="text-lg text-left mb-6 dark:text-cullen">
      {Parser(props.content)}
    </p>
    </>
}

export default Header;
