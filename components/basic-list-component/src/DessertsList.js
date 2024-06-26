function DessertsList(props) {
    // Implement the component here.
    // Filter list 
    let newDesserts = props.data.filter(
        (item) => (item.calories < 500)
    );

    // Sort list in ascending order based on calories
    newDesserts.sort((dessert1, dessert2) => dessert1.calories - dessert2.calories);

    return (<ul>
        {/* <li>{ newDessert.map((item) => (`${item.name} - ${item.calories} cal`))}</li> */}
        {newDesserts.map((item) => (
          <li key={item.id}>
            {item.name} - {item.calories} cal.
            </li>
        ))}
      </ul>);
    }
    
    export default DessertsList;