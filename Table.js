import React, { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'; 




const Table = () => {
  const [isDisabled,setIsDisabled] = useState(true);
  const [selected,setSelected]=useState("");
  const [isReview,setIsReview]=useState("false");
  const [isComment,setIsComment]=useState("false");
  


  const selectRowProp = {
    mode: 'checkbox',
    clickToSelect: true,
    onSelect:  handleOnSelect,
    onSelectAll: handleOnSelectAll
  };

  const handleReviewClick = (e) => {
    e.preventDefault();
    setIsReview("true");
  }
  const handleReplyClick = (e) => {
    e.preventDefault();
   setIsComment("true");
  }

  function handleOnSelect(row, isSelect, rowIndex, e) {
    if(isSelect){
   setIsDisabled(false);
   setSelected(row.dos);
   }
   else 
   setIsDisabled(true);
  
   
 }

 function handleOnSelectAll  (isSelect, rows, e)  {
   if(isSelect){
     setIsDisabled(false);
    }
   else
   setIsDisabled(true);
   
 }

 
    const columns2 = [{
  dataField: 'id',
  text: 'Product ID',
  sort: true
}, {
  dataField: 'name',
  text: 'Product Name',
  sort: true
}, {
  dataField: 'price',
  text: 'Product Price'
}];

 const columns = [{
   dataField: 'dos',
   text: 'DOS',
   sort: true
 },
 {
   dataField: 'patient',
   text: 'Patient',
   sort: true
 },
 {
   dataField: 'billedCharges',
   text: 'Billed Charges',
   sort: true
 },
 {
   dataField: 'adjustedPrice',
   text: 'Adjusted Price',
   sort: true
 },
 {
   dataField: 'payor',
   text: 'Payor',
   sort: true
 },
 {
   dataField: 'tin',
   text: 'TIN',
   sort: true
 },
 {
   dataField: 'providercontact',
   text: 'Provider Contact',
   sort: true
 },
 {
   dataField: 'isightclaim',
   text: 'Data iSight Claim #',
   sort: true
 },
 {
   dataField: 'sentdate',
   text: 'Sent Date',
   sort: true
 },
 {
   dataField: 'duedate',
   text: 'Due Date',
   sort: true
 },
 {
   dataField: 'detail',
   text: 'Line Detail',

 }];

// const [resultSet,setResultSet]=useState("");
 // useLayoutEffect(()=>{
 //   getAgreement();
 //   },[resultSet]);

const getAgreement = () =>
{

apiClient.requestAPI(configData.api.pendingAgreementAPI.type,
   configData.api.pendingAgreementAPI.name)
   .then((result) => {
   // if(result.data.length){
   //   setResultSet(result.data[0].patient);
   // console.log(result.data[0]);
   // }
 }); 

}


  
const resultSet=[{
 "dos": "03/25/2020",
 "patient": "Flinstone, Fred",
 "billedCharges": 1977.56,
 "adjustedPrice": 1546.12,
 "payor": "United",
 "tin":"11-1111111",
 "providercontact": "Rowe",
 "isightclaim":"10007366352",
 "sentdate":"05/08/2020",
 "duedate":"Today"


},
{
 "dos": "03/20/2020",
 "patient": "Flinstone, Rose",
 "billedCharges": 1977.56,
 "adjustedPrice": 1546.12,
 "payor": "Max",
 "tin":"11-1111111",
 "providercontact": "Lowenstien",
 "isightclaim":"10007326549",
 "sentdate":"05/09/2020",
 "duedate":"Expiring Soon"
},
{
 "dos": "03/27/2020",
 "patient": "Flinstone, Little",
 "billedCharges": 1977.56,
 "adjustedPrice": 1546.12,
 "payor": "United",
 "tin":"11-1111111",
 "providercontact": "Washington-Greene",
 "isightclaim":"10009457754",
 "sentdate":"05/09/2020",
 "duedate":"Next Business Day"
}
]

  return (

    <>

    { 
        <main className="flex-grow-1 p-3 bg-white border border-secondary flow-sm">

          <Row pt-md={2}>
            <Col md={6}>
              <h2 className="h5 mb-4 d-none d-md-block">Pending Agreements </h2>
            </Col>
            </Row>
            <details class="px-2 small">
          <summary>View Terms of Agreement</summary>
          <div class="flow-sm">
            <ul class="list-space-xl my-0">
              <li>Provider agrees to accept the <b>Adjusted Price</b> listed for each selected claim as payment in full for the products/services provided to the specified patient(s), provided that payment is processed.</li>
              <li>Provider will not balance bill patient or patient’s family (except for the deductible, coinsurance, and non-covered items, if applicable).</li>
              <li>Provider accepts the above and waives all late charges, provided that the Payor waives their right to conduct an on-site audit of the billed charges.</li>
            </ul>
            <p>
              Data iSight is not a payor, and is not financially responsible for any payments due to the Provider. Payment of benefits, if any, is subject to all terms and conditions of the policy. Therefore, this agreement does not constitute, nor should it be construed as, a guarantee of benefit payment by the Payor, and will be null and void if no benefit payment is determined to be payable by the Payor. This agreement is pursuant to previous communications.
            </p>
          </div>
        </details>

            <div className="table-responsive">
              <BootstrapTable
                 classes="small table-sm mb-0"
                keyField='dos'
                data={resultSet}
                columns={columns}
                 />

            </div>



           
         

     
        </main>
     }
  
    </>
  
  )
    
}

export default Table;