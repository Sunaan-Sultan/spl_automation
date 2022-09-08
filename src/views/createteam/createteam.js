import React from 'react'
import './createteam.css'
import { CForm, 
  CFormLabel, 
  CFormTextarea,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CButton
 } from '@coreui/react'

function createteam() {
  return (
    <>
      <CForm>
        <div className="mb-3">
          <CFormLabel htmlFor="exampleFormControlTextarea1">Enter Student Name</CFormLabel>
          <CFormTextarea size="lg" id="exampleFormControlTextarea1" rows="5" cols="2"></CFormTextarea>
        </div>
        <div >
          <CDropdown>
            <CDropdownToggle color="secondary">Category</CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem href="#">A</CDropdownItem>
              <CDropdownItem href="#">B</CDropdownItem>
              <CDropdownItem href="#">C</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CButton className='createteam-button' color="info" variant="outline">Add</CButton>
        </div>
        <div className="category">
          <CFormLabel htmlFor="exampleFormControlTextarea1">Category A</CFormLabel>
          <CFormLabel className="categoryB">Category B</CFormLabel>
          <CFormLabel className="categoryC">Category C</CFormLabel>
        </div>
        <div class="button2">
        <CButton color="info" variant="outline">Create Team</CButton>
        </div>
      </CForm>
    </>
  )
}

export default createteam