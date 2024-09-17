function UniqueID(){
    const userList = [
        {
            id:1,
            name:"eshan",
            prof:"programmer",
            age:20,
            EnrolledCourse: [
                {
                    CourseID:100,
                    name:"Journey Of Frontend Web development",
                    price:5000,
                    module:120
                },
                {
                    CourseID:300,
                    name:"Journey Programming",
                    price:4000,
                    module:150
                },
                
                {
                    CourseID:250,
                    name:"MERN Stack",
                    price:6000,
                    module:300,
                },

            ]

        },
        {
            id:2,
            name:"Tutul",
            prof:"programmer",
            age:24,
            EnrolledCourse: [
                {
                    CourseID:100,
                    name:"Journey Of Frontend Web development",
                    price:5000,
                    module:120
                },
            
            ]

        },
        {
            id:3,
            name:"Shajeeb",
            prof:"student",
            age:22,
            EnrolledCourse: [
                {
                    CourseID:100,
                    name:"Programming For Beginners",
                    price:5000,
                    module:120
                },
            
            ]

        },
     

    ]
    return(
        <>
          <h2>List Of user:</h2>  
         {userList.map((userInfo)=>(
            <div key={userInfo.id}>
                <p>{userInfo.name}</p>
                <p>{userInfo.prof}</p>
                <p>{userInfo.age}</p>
                <p>{userInfo.id}</p>

                <br />

                <h3>Enrolled Courses List: </h3>
                <ul key={userInfo.id}>
                    { userInfo.EnrolledCourse.map((courses) => (
                            <li key={courses.CourseID}>
                               <span>Course Name: {courses.name}, </span>
                               <span>Course Price: {courses.price}, </span>
                               <span>Course Module: {courses.module}, </span>
                            </li>
                    ))
                    }
                </ul>
            </div>
         ))}


        </>
    )
}


export default UniqueID;