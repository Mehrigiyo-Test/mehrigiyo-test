import React, { useState } from "react";
import './dropdownStyle.css'
import {flag_uzb-logo.png} from './../'

function Dropdown(
  img,
  text,
) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  
  return (
    <>
  <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || <img className="" src={flag_uzb-logo.png}/> <div>uz</div>}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {Dropdown.map(option => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
 {/* <div>droopdown</div> */}
    </>
  )
  
}

export default Dropdown