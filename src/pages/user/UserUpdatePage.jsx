// import { Button, MenuItem, TextField } from '@mui/material';
// import { Box, Container } from '@mui/system';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import "./style.scss";

// function CreateJO() {
//     const user = JSON.parse(localStorage.getItem("FWApp-gig:rememberedAccount"));
//     const [select, setSelect] = useState()
//     const [repo, setRepo] = useState()
//     const [loading, setLoading] = useState()
//     const [city, setCity] = useState()
//     const [fectch, setFectch] = useState([])

//     //----------------Data form ----------------

//     const [data, setData] = useState({
//         accountID: user?.id,
//     })
//     useEffect(() => {
//         setLoading(true)
//         axios.get(`https://gig-worker-backend.azurewebsites.net/Location/City?province=${select}`)
//             .then((res) => {
//                 const { data } = res;
//                 setFectch(data);
//                 console.log(fectch);
//                 console.log(data);
//                 setLoading(false)
//             })
//     }, [select])
//     useEffect(() => {
//         setLoading(true)
//         const fetchData = async () => {
//             const joblocation = await jobOfferApi.getJobType(user?.id);
//             setRepo(joblocation);
//             setLoading(false)
//         }
//         fetchData();
//     }, []);
//     console.log(repo)
//     const inputsHandler = (e) => {
//         setData({ ...data, [e.target.name]: e.target.value })
//     }
//     const selectLocation = (e) => {
//         setSelect(e.target.value)
//         setData({ ...data, [e.target.name]: e.target.value })
//     }
//     const inputsHandleLocation = (e) => {
//         setData({ ...data, [e.target.name]: e.target.value })
//     }
//     // console.log(select)
//     // console.log(fetch)
//     console.log(data)
//     const handleSubmit = (e) => {
//         try {
//             e.preventDefault()
//             jobOfferApi.add(data);
//             alert('Thêm thành công')
//         } catch (error) {
//             alert("501 Not Implemented: Máy chủ không công nhận các phương thức yêu cầu hoặc không có khả năng xử lý nó.")
//         }

//     }
//     return (
//         <Container>
//             <Box className='intro-create-job'>
//                 <h1>Tạo bài viết mới và đăng tuyển công việc của bạn</h1>
//                 <h3>Hãy ghi thông tin cụ thể và chi tiết để mọi người dễ dàng tiếp cận công việc dễ dàng hơn</h3>
//             </Box>
//             <Box className='form-create-job'
//                 component="form"
//                 onSubmit={handleSubmit}
//                 sx={{
//                     '& > :not(style)': { m: 1, width: '50ch' },
//                 }}
//                 noValidate
//                 autoComplete="off"
//             >
//                 {/*các field cần có:
//                 1. Job type: select
//                 2. Location: select (city, province) - đã có
//                 3. Degree: select
//                 4. Business: select (chưa có business thì input text)
//                 5. Num of Recruit: input text (bắt buộc)
//                 6. offer end time: input text (bắt buộc DD/MM/YYYY)
//                 7. Salary: input text
//                 8. Age: input text
//                 9. Job description: input text
//                 10. Other: input text
//                 11. Start time: input text (vd 08:00)
//                 12. End time: input text
//                 13. Address: input text */}

//                 <h4>Thông tin loại công việc và địa chỉ ứng tuyển:</h4>
//                 <TextField
//                     select
//                     label="Chọn loại công việc"
//                     onChange={selectLocation}
//                     name='jobType'>
//                     {repo?.jobNames?.map((option) => (
//                         <MenuItem key={option?.typeID} value={option?.typeID}>
//                             {option?.name}
//                         </MenuItem>
//                     ))}
//                 </TextField>
//                 <TextField
//                     select
//                     label="Chọn bằng cấp"
//                     onChange={selectLocation}
//                     name='degree'>
//                     {repo?.degreeNames?.map((option) => (
//                         <MenuItem key={option?.degreeID} value={option?.degreeID}>
//                             {option?.degreeName}
//                         </MenuItem>
//                     ))}
//                 </TextField>


//                 <p>*Nếu nơi ứng tuyển không phải là doanh nghiệp hãy điền rõ địa chỉ ở ô bên dưới:</p>
//                 <TextField label="Địa chỉ:" variant="standard" onChange={inputsHandler} name='address' />
//                 <TextField
//                     select
//                     label="Chọn địa chỉ doanh nghiệp"
//                     onChange={selectLocation}
//                     name='business'>
//                     {repo?.businessAddresses?.map((option) => (
//                         <MenuItem key={option?.businessID} value={option?.businessID}>
//                             {option?.address}
//                         </MenuItem>
//                     ))}
//                 </TextField>
//                 <TextField
//                     select
//                     label="Chọn Tỉnh"
//                     // value={select}
//                     onChange={inputsHandler}
//                     name='province'>
//                     {provivince.map((option) => (
//                         <MenuItem key={option} value={option} >
//                             {option}
//                         </MenuItem>
//                     ))}
//                 </TextField>
//                 <TextField
//                     select
//                     label="Chọn Thành phố/Quận/Huyện"
//                     onChange={selectLocation}
//                     name='location'>
//                     {fectch?.map((option) => (
//                         <MenuItem key={option?.locationID} value={option?.locationID}>
//                             {option?.city}
//                         </MenuItem>
//                     ))}
//                 </TextField>

//                 <h4>Thông tin chi tiết về công việc:</h4>
//                 <TextField label="Số lượng cần tuyển:" variant="standard" onChange={inputsHandler} name='numOfRecruit' />
//                 <TextField label="Thời hạn kết thúc đăng tuyển:" variant="standard" onChange={inputsHandler} name='offerEndTime' />
//                 <TextField label="Lương (theo giờ):" variant="standard" onChange={inputsHandler} name='salary' />
//                 <TextField label="Độ tuổi tối thiểu:" variant="standard" onChange={inputsHandler} name='age' />
//                 <TextField label="Thời gian bắt đầu làm việc:" variant="standard" onChange={inputsHandler} name='startTime' />
//                 <TextField label="Thời gian kết thúc công việc:" variant="standard" onChange={inputsHandler} name='endTime' />
//                 <TextField label="Mô tả công việc:" variant="standard" onChange={inputsHandler} name='jobDescription' />
//                 <TextField label="Yêu cầu khác:" variant="standard" onChange={inputsHandler} name='other' />

//                 <Button className='submit-button' type='submit'>Đăng tuyển</Button>
//             </Box>
//         </Container>
//     )
// }

// export default CreateJO