import React, { useState } from 'react';
import axios from 'axios';
import ChatbotPopup from '../chatbot';

export default function Bmi() {
    const [gender, setGender] = useState(null);
    const [age, setAge] = useState('');
    const [feet, setFeet] = useState('');
    const [inches, setInches] = useState('');
    const [weight, setWeight] = useState('');
    const [ageError, setAgeError] = useState('');
    const [heightError, setHeightError] = useState('');
    const [weightError, setWeightError] = useState('');
    const [apiResponse, setApiResponse] = useState(null);
    const [bmiValue, setBmiValue] = useState('');
    const [caloriesPerDay, setCaloriesPerDay] = useState('');

    function btnClick(event) {
        setGender(event);
    }

    function handleAgeChange(event) {
        setAge(event.target.value);
    }

    function handleFeetChange(event) {
        setFeet(event.target.value);
    }

    function handleInchesChange(event) {
        setInches(event.target.value);
    }

    function handleWeightChange(event) {
        setWeight(event.target.value);
    }

    function onClear() {
        setGender(null);
        setAge('');
        setHeight('');
        setWeight('');
        setAgeError('');
        setHeightError('');
        setWeightError('');
        setApiResponse(null);
        setBmiValue('');
        setCaloriesPerDay('');
    }

    function validateInputs() {
        let isValid = true;
        if (age === '') {
            setAgeError('Age is required');
            isValid = false;
        } else {
            setAgeError('');
        }
        if (feet === '' || inches === '') {
            setHeightError('Height is required');
            isValid = false;
        } else {
            setHeightError('');
        }
        if (weight === '') {
            setWeightError('Weight is required');
            isValid = false;
        } else {
            setWeightError('');
        }
        return isValid;
    }

    async function onSubmit(event) {
        event.preventDefault();
        if (validateInputs()) {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://nutrition-calculator.p.rapidapi.com/api/nutrition-info',
                    params: {
                        measurement_units: 'std',
                        sex: gender,
                        age_value: age,
                        age_type: 'yrs',
                        feet: feet,
                        inches: inches,
                        lbs: weight,
                        activity_level: 'Active'
                    },
                    headers: {
                        'X-RapidAPI-Key': 'ce0a849cc9msh972a168303f9c76p183879jsn1568dabd8c01',
                        'X-RapidAPI-Host': 'nutrition-calculator.p.rapidapi.com'
                    }
                };

                const response = await axios.request(options);
                setApiResponse(response.data);
                console.log("API Response:", response.data);
                if (response.data.BMI_EER) {
                    setBmiValue(response.data.BMI_EER.BMI);
                    setCaloriesPerDay(response.data.BMI_EER["Estimated Daily Caloric Needs"]);
                }
            } catch (error) {
                console.error("API Error:", error);
            }
        }
    }

    return (
        <>
            <div className="m-3 p-3 border rounded">
                <h1>BMI Index</h1>
                <form onSubmit={onSubmit}>
                    <div className="py-4">
                        <h3>Gender</h3>
                        <div className="d-flex flex-row align-items-center py-4">
                            <button
                                className={`btn ${gender === 'male' ? 'btn-success' : 'btn-secondary'} w-100 mx-3`}
                                onClick={() => btnClick('male')}
                                type="button"
                            >
                                Male
                            </button>
                            <button
                                className={`btn ${gender === 'female' ? 'btn-success' : 'btn-secondary'} w-100 mx-3`}
                                onClick={() => btnClick('female')}
                                type="button"
                            >
                                Female
                            </button>
                        </div>
                        <div className="d-flex flex-row align-items-center py-4">
                            <div className='w-100'>
                                <h3>Age</h3>
                                <input
                                    type="number"
                                    className="form-control p-3 w-75"
                                    placeholder="Enter your age"
                                    value={age}
                                    onChange={handleAgeChange}
                                />
                                <p className="text-danger">{ageError}</p>
                            </div>
                            <div className='w-100'>
                                <h3>Height</h3>
                                <div className='d-flex flex-row align-items-center'>
                                    <div>
                                        <input
                                            type="number"
                                            className="form-control p-3 w-75"
                                            placeholder="Enter your height (ft)"
                                            value={feet}
                                            onChange={handleFeetChange}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="number"
                                            className="form-control p-3 w-75"
                                            placeholder="Enter your height (ft)"
                                            value={inches}
                                            onChange={handleInchesChange}
                                        />
                                    </div>
                                </div>
                                <p className="text-danger">{heightError}</p>
                            </div>
                            <div className='w-100'>
                                <h3>Weight (lb)</h3>
                                <input
                                    type="number"
                                    className="form-control p-3 w-75"
                                    placeholder="Enter your weight (lb)"
                                    value={weight}
                                    onChange={handleWeightChange}
                                />
                                <p className="text-danger">{weightError}</p>
                            </div>
                        </div>
                        <div className='text-center'>
                            <button
                                type="submit"
                                className="btn btn-primary text-center"
                            >
                                Calculate
                            </button>
                            <button
                                className="btn btn-secondary text-center mx-3"
                                onClick={onClear}
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {
                apiResponse && (
                    <>
                        <div className="m-3 p-3 border rounded">
                            <h1>BMI Result</h1>
                            <div className='d-flex flex-row align-items-center'>
                                <div>
                                    <span>BMI</span>
                                    <span className='mx-3 font-weight-bold fs-1 text-success'>{apiResponse.BMI_EER.BMI}</span>
                                </div>
                                <div>
                                    {
                                        apiResponse.BMI_EER && (
                                            <>
                                                <span>Estimated Calories Need:</span>
                                                <span className='mx-3 font-weight-bold fs-1 text-success'>
                                                    {apiResponse.BMI_EER["Estimated Daily Caloric Needs"].replace(' kcal/day', ' cal/day')}
                                                </span>
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        {
                            apiResponse.macronutrients_table && (
                                <div className='border rounded m-3 p-3'>
                                    <h1>Nutrition Table</h1>
                                    <div className='d-flex'>
                                        <div className="m-3 p-3 border rounded">
                                            <h1>MacroNutrients</h1>
                                            <div className='d-flex flex-row align-items-center'>
                                                <div>
                                                    <table className="table">
                                                        <tbody>
                                                            {apiResponse.macronutrients_table["macronutrients-table"].map((item, index) => (
                                                                <tr key={index}>
                                                                    <td>{item[0]}</td>
                                                                    <td>{item[1]}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="m-3 p-3 border rounded">
                                            <h1>Minerals</h1>
                                            <div className='d-flex flex-row align-items-center'>
                                                <div>
                                                    <table className="table">
                                                        <tbody>
                                                            {apiResponse.minerals_table["essential-minerals-table"].map((item, index) => (
                                                                <tr key={index}>
                                                                    <td>{item[0]}</td>
                                                                    <td>{item[1]}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="m-3 p-3 border rounded">
                                            <h1>Non-essential Minerals</h1>
                                            <div className='d-flex flex-row align-items-center'>
                                                <div>
                                                    <table className="table">
                                                        <tbody>
                                                            {apiResponse.non_essential_minerals_table["non-essential-minerals-table"].map((item, index) => (
                                                                <tr key={index}>
                                                                    <td>{item[0]}</td>
                                                                    <td>{item[1]}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </>
                )
            }
            <ChatbotPopup bmiValue={bmiValue} caloriesPerDay={caloriesPerDay} />
        </>
    )
}
