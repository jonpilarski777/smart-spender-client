import React, {useState} from 'react'

function NewExpense({categories, addNewExpense, user}) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState("");
    const [newCategory, setNewCategory] = useState("")

 
    const newSpending = {
        description,
        amount,
        date,
        category_id: newCategory
    };

    const configObj = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newSpending),
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch(`http://localhost:9292/spending/${user.id}`, configObj)
        .then((resp) => resp.json())
        .then((expense) => {
            addNewExpense(expense)
        });  
    };

    return (
        <div>
            <h3> Create a new Expense </h3>
            <form onSubmit = {handleSubmit}>
                <label htmlFor = "description"> Description:</label>
                <input 
                    id = "description"
                    type="text"
                    placeholder = ""
                    name = "description"
                    value = {description}
                    required = "required"
                    onChange={(e)=> setDescription(e.target.value)}
                />
                <label htmlFor = "amount"> Amount:</label>
                <input 
                    id = "amount"
                    type="number"
                    placeholder = "$"
                    name = "amount"
                    value = {amount}
                    min = "0.00"
                    step = "any"
                    required = "required"
                    onChange={(e)=> setAmount(e.target.value)}
                />
                <label htmlFor = "date"> Date: </label>
                <input 
                    id = "date"
                    type="date"
                    placeholder = ""
                    name = "date"
                    value = {date}
                    required = "required"
                    onChange={(e)=> setDate(e.target.value)}
                />
                <label>
                    Category:
                    <select 
                        placeholder="Select a Category"
                        onChange={(e) => setNewCategory(e.target.value)}
                    >
                        <option hidden>Select a Category</option>   
                        {categories.map((category) => (
                            <option key = {category.id} value={category.id}>
                                {category.description}
                            </option>    
                        ))}    
                    </select>
                </label>
                <button disabled= {newCategory && description && amount && date?false:true} type="submit">Add Expense</button>
            </form>
        </div>
    )
}

export default NewExpense;
