import axios from 'axios';
class FacultyService 
{
    employeeList = [
        // { id: 1, name: "Dinesh", designation: "Web Developer" },
        // { id: 2, name: "Sathish", designation: "Tester" },
        // { id: 3, name: "varun", designation: "App Developer" },
        // { id: 4, name: "Barath", designation: "Machine Learning Engineer" },
        // { id: 5, name: "Thiru", designation: "Gamer" },
        // {id:6,name:"sounder",designation:"Programmer"},
    ];
    getEmployee(){
        return axios.get("http://localhost:8081/api/faculty/all");
    }
    saveEmployee(staff){
        //  this.employeeList.push(staff);
        axios.post("http://localhost:8081/api/faculty/insert",staff);
    }
    selectEmployee(id){
        return axios.get(`http://localhost:8081/api/faculty/${id}`);
    }
    // getItemIndex(id){
    //     //return this.employeeList.findIndex((e)=>e.id ===id);
    //     return 
    //     }
    updateEmployee(employee){
        const index=this.getItemIndex(employee.id);
        this.employeeList[index].name=employee.name;
        this.employeeList[index].designation=employee.designation;
    }
    delFaculty(id)
    {
        const Faculty = this.selectEmployee(id);
        const sid = Faculty.id;
        const flag=window.confirm("Do you want to delete the record?")
        if(flag==true)
        axios.delete(`http://localhost:8081/api/faculty/delete/${sid}`);
    }
    
}
export default new FacultyService();

