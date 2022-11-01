import { Button, Container, MenuItem, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import businessApi from '../../api/businessApi'
import locationApi from '../../api/locationApi'
import "./styleForm.scss"
import * as Yup from 'yup';
import { useFormik } from 'formik';
const provivince = ["Thành phố Cần Thơ", "Thành phố Đà Nẵng", "Thành phố Hà Nội", "Thành phố Hải Phòng", "Thành phố Hồ Chí Minh", "Tỉnh An Giang", "Tỉnh Bà Rịa - Vũng Tàu", "Tỉnh Bắc Giang", "Tỉnh Bắc Kạn", "Tỉnh Bạc Liêu", "Tỉnh Bắc Ninh", "Tỉnh Bến Tre", "Tỉnh Bình Định", "Tỉnh Bình Dương", "Tỉnh Bình Phước", "Tỉnh Bình Thuận", "Tỉnh Cà Mau", "Tỉnh Cao Bằng", "Tỉnh Đắk Lắk", "Tỉnh Đắk Nông", "Tỉnh Điện Biên", "Tỉnh Đồng Nai", "Tỉnh Đồng Tháp", "Tỉnh Gia Lai", "Tỉnh Hà Giang", "Tỉnh Hà Nam", "Tỉnh Hà Tĩnh", "Tỉnh Hải Dương", "Tỉnh Hậu Giang", "Tỉnh Hoà Bình", "Tỉnh Hưng Yên", "Tỉnh Khánh Hòa", "Tỉnh Kiên Giang", "Tỉnh Kon Tum", "Tỉnh Lai Châu", "Tỉnh Lâm Đồng", "Tỉnh Lạng Sơn", "Tỉnh Lào Cai", "Tỉnh Long An", "Tỉnh Nam Định", "Tỉnh Nghệ An", "Tỉnh Ninh Bình", "Tỉnh Ninh Thuận", "Tỉnh Phú Thọ", "Tỉnh Phú Yên", "Tỉnh Quảng Bình", "Tỉnh Quảng Nam", "Tỉnh Quảng Ngãi", "Tỉnh Quảng Ninh", "Tỉnh Quảng Trị", "Tỉnh Sóc Trăng", "Tỉnh Sơn La", "Tỉnh Tây Ninh", "Tỉnh Thái Bình", "Tỉnh Thái Nguyên", "Tỉnh Thanh Hóa", "Tỉnh Thừa Thiên Huế", "Tỉnh Tiền Giang", "Tỉnh Trà Vinh", "Tỉnh Tuyên Quang", "Tỉnh Vĩnh Long", "Tỉnh Vĩnh Phúc", "Tỉnh Yên Bái"]

function BusinessForm() {
    /*===============================logic=============================== */
    const formik = useFormik({
        initialValues: {
            locationID: Yup.number,
        }, onChange: (values) => {
            setData({ ...data, [values.target.name]: values.target.value })
            setUpdatedata({ ...updatedata, [values.target.name]: values.target.value })
        },
        onSubmit: (values) => {
            alert(JSON.stringify(formik.values))
        },
        validationSchema: Yup.object({
            locationID: Yup.number().required("Required.").integer().typeError("Xin hãy chọn thành phố."),
        }),
    });
    const user = JSON.parse(localStorage.getItem("FWApp-gig:rememberedAccount"));
    const [repo, setRepo] = useState({})
    const param = useParams()
    const [data, setData] = useState({
        accountID: user?.id,
    })
    const [city, setCity] = useState([])
    const [loading, setLoading] = useState(false)
    const [select, setSelect] = useState()
    const [file, setFile] = useState()
    const [image, setImage] = useState(null)
    const [updatedata, setUpdatedata] = useState({
        businessID: parseInt(param.id),
        accountID: user?.id,
    })
    useEffect(() => {
        setLoading(true)
        const fetchlocation = async () => {
            const location = await locationApi.getProvince(select);
            setCity(location)
            setLoading(false)
        }
        fetchlocation()
    }, [select]);
    useEffect(() => {
        setLoading(true)
        const fetchBusiness = async () => {
            const jobList = await businessApi.getID(param.id);
            setRepo(jobList);
            setLoading(false)
        }
        fetchBusiness();
    }, [param.id != undefined])
    const handleselect = (event) => {
        setSelect(event.target.value)
        setData({ ...data, [event.target.name]: event.target.value })
        setUpdatedata({ ...updatedata, [event.target.name]: event.target.value })
    }
    const inputhandler = (event) => {

        setData({ ...data, [event.target.name]: event.target.value })
        setUpdatedata({ ...updatedata, [event.target.name]: event.target.value })
    }
    const onImageChange = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]));
        setFile(event.target.files[0])
    }
    console.log(file)

    /*===============================Form data=============================== */
    const formData = new FormData();
    formData.append("businessLogo", file);

    let details = {
        accountID: data.accountID,
        businessName: data.businessName,
        address: data.address,
        province: data.province,
        locationID: data.locationID,
        description: data.description,
        benefit: data.benefit
    }
    for (let key in details) {
        formData.append(key, details[key]);
    }
    /*===============================handle create=============================== */
    const handlecreate = (event) => {
        event.preventDefault()
        console.log(data)
        try {
            axios.post("https://gig-worker-backend.azurewebsites.net/Business/CreateBu",
                formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
                .then(res => {
                    alert(res.status)
                })
        } catch (error) {
            alert("501 Not Implemented: Máy chủ không công nhận các phương thức yêu cầu hoặc không có khả năng xử lý nó.")
        }
    }
    console.log(data)
    console.log(repo)
    console.log(select)
    /*===============================handle update=============================== */
    const handleUpdate = (event) => {
        event.preventDefault()
        console.log(updatedata)
        const formData = new FormData();
        formData.append("businessLogo", file);
        let details = {
            accountID: updatedata.accountID,
            businessID: updatedata.businessID,
            businessName: updatedata.businessName,
            address: updatedata.address,
            province: updatedata.province,
            locationID: updatedata.locationID,
            description: updatedata.description,
            benefit: updatedata.benefit
        }
        for (let key in details) {
            formData.append(key, details[key]);
        }
        try {
            axios.put("https://gig-worker-backend.azurewebsites.net/Business/UpdateBu",
                formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(res => {
                    alert(res.status)
                })
        } catch (error) {
            alert("501 Not Implemented: Máy chủ không công nhận các phương thức yêu cầu hoặc không có khả năng xử lý nó.")
        }
    }
    console.log(city)
    return (
        <Container>
            {loading == false ?
                <Box>
                    {
                        param.id == undefined ?
                            <Box
                                className='test-align'
                                component={'form'}
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                                }}
                                onSubmit={handlecreate}
                                encType="multipart/form-data"
                                noValidate
                                autoComplete="off">

                                <div className='intro-head'>
                                    <h1>Dễ dàng quản lý cửa hàng của bạn cùng GIG-Woker</h1>
                                    <h4>Thêm cửa hàng của bạn vào danh sách:</h4>
                                </div>

                                <div className='create-info-bus'>
                                    <h2>Thông tin cửa hàng của bạn:</h2>
                                    <TextField variant='filled' name='businessName' label='Tên cửa hàng' onChange={inputhandler} />
                                    <TextField variant='filled' name='address' label='Địa chỉ' onChange={inputhandler} />
                                    <TextField
                                        select
                                        label="Chọn Tỉnh"
                                        // value={select}
                                        onChange={handleselect}
                                        name='province'>
                                        {provivince.map((option) => (
                                            <MenuItem key={option} value={option} >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    {select == undefined ? <div></div> :
                                        <div>
                                            <TextField
                                                select
                                                label="Chọn Thành phố/Quận/Huyện"
                                                value={formik?.values?.locationID}
                                                onChange={formik.handleChange}>
                                                {city?.map((option) => (
                                                    <MenuItem key={option?.locationID} value={option?.locationID}>
                                                        {option?.city}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                            {formik.errors.locationID && (<Typography variant="caption" color="red">{formik.errors.locationID}</Typography>)}
                                        </div>
                                    }


                                </div>

                                <div className='descrip-bus'>
                                    <h2>Một vài mô tả về cửa hàng của bạn:</h2>
                                    <TextField variant='filled' name='description' label='Mô tả cửa hàng' onChange={inputhandler} rows={5} />
                                    <TextField variant='filled' name='benefit' label='Quyền lợi' onChange={inputhandler} />
                                </div>

                                <h2>Thêm hình ảnh/logo cửa hàng của bạn:</h2>
                                <div className='add-img'>
                                    <div>
                                        <img src={image} style={{
                                            height: 150,
                                            width: 150
                                        }} alt="preview image" />
                                    </div>
                                    <div className='input-img'>
                                        <input type="file" onChange={onImageChange} className="filetype" />
                                    </div>
                                </div>
                                <div className='add-business-button'>
                                    <Button type='submit'>Thêm</Button>
                                </div>
                            </Box> :
                            /*-----------------------------------UPDATE-------------------------------------------- */
                            <Box
                                className='test-align'
                                component={'form'}
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                                }}
                                onSubmit={handleUpdate}
                                encType="multipart/form-data"
                                noValidate
                                autoComplete="off">

                                <div className='intro-head'>
                                    <h4>Chỉnh sửa cửa hàng của bạn Tại đây:</h4>
                                </div>

                                <div className='create-info-bus'>
                                    <h2>Thông tin cửa hàng của bạn:</h2>
                                    <TextField variant='filled' name='businessName' label='Tên cửa hàng' onChange={inputhandler} defaultValue={repo?.businessName} />
                                    <TextField variant='filled' name='address' label='Địa chỉ' onChange={inputhandler} defaultValue={repo?.address} />
                                    <TextField
                                        select
                                        label="Chọn Tỉnh"
                                        // value={select}
                                        onChange={handleselect}
                                        name='province'>
                                        {provivince.map((option) => (
                                            <MenuItem key={option} value={option} >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        select
                                        label="Chọn Thành phố/Quận/Huyện"
                                        onChange={inputhandler}
                                        name='locationID'>
                                        {city?.map((option) => (
                                            <MenuItem key={option?.locationID} value={option?.locationID}>
                                                {option?.city}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>

                                <div className='descrip-bus'>
                                    <h2>Một vài mô tả về cửa hàng của bạn:</h2>
                                    <TextField variant='filled' name='description' label='Mô tả cửa hàng' onChange={inputhandler} defaultValue={repo?.description} />
                                    <TextField variant='filled' name='benefit' label='Quyền lợi' onChange={inputhandler} defaultValue={repo?.benefit} />
                                </div>

                                <h2>Thêm hình ảnh/logo cửa hàng của bạn:</h2>
                                <div className='add-img'>
                                    <div>
                                        <img src={image} style={{
                                            height: 150,
                                            width: 150
                                        }} alt="preview image" />
                                    </div>
                                    <div className='input-img'>
                                        <input type="file" onChange={onImageChange} className="filetype" />
                                    </div>
                                </div>
                                <div className='add-business-button'>
                                    <Button type='submit' onClick={handleUpdate}>Thêm</Button>
                                </div>
                            </Box>
                    } </Box> :
                <Box>
                </Box>}
        </Container>
    )
}

export default BusinessForm