const employees = [
    
    
    { id: 1, name: "kural" },
    { id: 2, name: "nithi" },
    { id: 3, name: "vijay"},
    { id: 4, name: "karthk"},
    { id: 5, name: "raja"},
    { id: 6, name: "peter"}

]





export const getEmployeDetails = (req, res) => {
    
res.status(200).json({message:'this is the emp details dive by server--->',employees})


}

export const getEmployeDetailsById = (req, res) => {
    
    const empId = req.params.id;

    const empIdDetails = employees.find(empObj => empObj.id == empId);

    if (!empIdDetails) {
    return res.status(404).json({message:'employee detais not found _____--<<>>>--_____'})
}
    res.status(200).json({ message: 'Employe details found>>>>>', data: [empIdDetails]  });
}

export const createEmployeeDetails = (req, res) => {

    // if (!req.body || !req.id || !req.name) {
    //     return res.status(404).json({message:"details not found___----___---"})
    // }

    const { id, name } = req.body;
    
    const newEmpDetails = {                 
        
        id: id,
        name: name

    };


    employees.push(newEmpDetails);


    res.status(200).json({ message:" employee created>>>>",data: employees });


}

export const updateEmployeedetail = (req, res) => {
 
    const empID = req.params.id;

    const empToUpdate = employees.find(empobj => empobj.id == empID);
    
    if (!empToUpdate)
    {
     return   res.status(200).json({message:"emp details not found ---update process not completed"})
    }

    empToUpdate.name = req.body.name;

res.status(200).json({message:'employe details got edited>>>>', data:employees})

}


export const deleteEmployeeDetail = (req, res) => {
                
    
    const empIdTodelete = req.params.id;

    const empIndexTodelete = employees.findIndex(empObj => +empObj.id == +empIdTodelete);

    if (empIdTodelete==-1) {

  return  res.status(200).json({ message: 'employe details not found'});
    
    }
    employees.splice(empIndexTodelete, 1);


    res.status(200).json({ message: 'employe details got deleted>>>>',data:employees});


}