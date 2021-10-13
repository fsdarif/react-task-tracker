import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className="header">
          <h1> {title} </h1>
            <Button onClick={onAdd} 
            color={showAdd ? 'tomato' : 'green'}
            text={showAdd ? 'Close' : 'Add'} />
        </header>
    )
}

Header.defaultProps = {
    title : "React is awesome"
}
Header.prototypes = {
    title : PropTypes.string
}

export default Header
