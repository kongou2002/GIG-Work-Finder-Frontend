import { Button, Container, MenuItem, TextField } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import businessApi from '../../api/businessApi'
import locationApi from '../../api/locationApi'
import "./styleForm.scss"
const provivince = ["Thành phố Cần Thơ", "Thành phố Đà Nẵng", "Thành phố Hà Nội", "Thành phố Hải Phòng", "Thành phố Hồ Chí Minh", "Tỉnh An Giang", "Tỉnh Bà Rịa - Vũng Tàu", "Tỉnh Bắc Giang", "Tỉnh Bắc Kạn", "Tỉnh Bạc Liêu", "Tỉnh Bắc Ninh", "Tỉnh Bến Tre", "Tỉnh Bình Định", "Tỉnh Bình Dương", "Tỉnh Bình Phước", "Tỉnh Bình Thuận", "Tỉnh Cà Mau", "Tỉnh Cao Bằng", "Tỉnh Đắk Lắk", "Tỉnh Đắk Nông", "Tỉnh Điện Biên", "Tỉnh Đồng Nai", "Tỉnh Đồng Tháp", "Tỉnh Gia Lai", "Tỉnh Hà Giang", "Tỉnh Hà Nam", "Tỉnh Hà Tĩnh", "Tỉnh Hải Dương", "Tỉnh Hậu Giang", "Tỉnh Hoà Bình", "Tỉnh Hưng Yên", "Tỉnh Khánh Hòa", "Tỉnh Kiên Giang", "Tỉnh Kon Tum", "Tỉnh Lai Châu", "Tỉnh Lâm Đồng", "Tỉnh Lạng Sơn", "Tỉnh Lào Cai", "Tỉnh Long An", "Tỉnh Nam Định", "Tỉnh Nghệ An", "Tỉnh Ninh Bình", "Tỉnh Ninh Thuận", "Tỉnh Phú Thọ", "Tỉnh Phú Yên", "Tỉnh Quảng Bình", "Tỉnh Quảng Nam", "Tỉnh Quảng Ngãi", "Tỉnh Quảng Ninh", "Tỉnh Quảng Trị", "Tỉnh Sóc Trăng", "Tỉnh Sơn La", "Tỉnh Tây Ninh", "Tỉnh Thái Bình", "Tỉnh Thái Nguyên", "Tỉnh Thanh Hóa", "Tỉnh Thừa Thiên Huế", "Tỉnh Tiền Giang", "Tỉnh Trà Vinh", "Tỉnh Tuyên Quang", "Tỉnh Vĩnh Long", "Tỉnh Vĩnh Phúc", "Tỉnh Yên Bái"]

function BusinessForm() {
    /*===============================logic=============================== */

    const user = JSON.parse(localStorage.getItem("FWApp-gig:rememberedAccount"));
    const [repo, setRepo] = useState({})
    const param = useParams()
    const [data, setData] = useState({

    })
    const [city, setCity] = useState([])
    const [loading, setLoading] = useState(true)
    const [select, setSelect] = useState()
    const [file, setFile] = useState()
    const [image, setImage] = useState(null)
    const [updatedata, setUpdatedata] = useState({
        businessID: parseInt(param.id),
    })
    //upload,view,get url image to cloudinary and post to backend
    const uploadImage = async (e) => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'pdqw5ig2')
        console.log(files)
        const res = await fetch('https://api.cloudinary.com/v1_1/dnypz3mia/image/upload', {
            mode: 'cors',
            method: 'POST',
            body: data
        })
        const file = await res.json()
        setLoading(false)
        setImage(file.secure_url);
        setFile(file.secure_url)
        setData({ ...data, accountID: user?.id, businessLogo: file.secure_url })
        setUpdatedata({ ...updatedata, accountID: user?.id, businessLogo: file.secure_url })
    }
    //onselect change fetch from backend
    const handleChange = (e) => {
        setSelect(e.target.value)
        const fetchCity = async () => {
            try {
                const response = await locationApi.getProvince(e.target.value)
                setCity(response)
                setUpdatedata({ ...updatedata, province: e.target.value })
            } catch (error) {
                console.log(error)
            }
        }
        fetchCity()
    }
    //onchange input
    const inputhandler = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
        setUpdatedata({ ...updatedata, [name]: value })
    }
    //fetch api from backend when parm.id is not undefined when finish set loading
    useEffect(() => {
        const fetchRepo = async () => {
            try {
                const response = await businessApi.getID(param.id)
                setRepo(response)
                setImage(response.businessLogo)
                setUpdatedata({
                    ...updatedata, province: response.province,
                    businessName: response.businessName,
                    businessAddress: response.businessAddress,
                })
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchRepo()
    }, [param.id])
    //when param.id is undefined set loading false
    useEffect(() => {
        if (param.id === undefined) {
            setLoading(false)
        }
    }, [param.id])
    /*===============================Form data=============================== */
    // const formData = new FormData();
    // let details = {
    //     accountID: user?.id,
    //     businessName: data.businessName,
    //     address: data.address,
    //     province: data.province,
    //     locationID: data.locationID,
    //     description: data.description,
    //     benefit: data.benefit,
    //     businessLogo: data.businessLogo,
    // }
    // for (let key in details) {
    //     formData.append(key, details[key]);
    // }
    /*===============================handle create=============================== */
    const handlecreate = (event) => {
        event.preventDefault()
        console.log(data)
        try {
            axios.post("https://gig-worker-backend.azurewebsites.net/Business/CreateBu",
                data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
                .then(res => {
                    //on res success print 'success' else print 'error'
                    if (res.status === 200) {
                        alert('Em đẹp lắm')
                    } else {
                        alert('Sum thing wong')
                    }
                })
        } catch (error) {
            alert("501 Not Implemented: Máy chủ không công nhận các phương thức yêu cầu hoặc không có khả năng xử lý nó.")
        }
    }
    // console.log(repo)
    // console.log(select)
    /*===============================handle update=============================== */
    const handleUpdate = (event) => {
        event.preventDefault()
        console.log(updatedata)
        // const formData = new FormData();
        // let details = {
        //     // if updatedata is undefine send nothing
        //     businessID: updatedata.businessID === undefined ? null : updatedata.businessID,
        //     accountID: updatedata.accountID === undefined ? null : updatedata.accountID,
        //     businessName: updatedata.businessName === undefined ? null : updatedata.businessName,
        //     address: updatedata.address === undefined ? null : updatedata.address,
        //     province: updatedata.province === undefined ? null : updatedata.province,
        //     locationID: updatedata.locationID === undefined ? null : updatedata.locationID,
        //     description: updatedata.description === undefined ? null : updatedata.description,
        //     benefit: updatedata.benefit === undefined ? null : updatedata.benefit,
        //     businessLogo: updatedata.businessLogo === undefined ? null : updatedata.businessLogo,
        // }
        // for (let key in details) {
        //     formData.append(key, details[key]);
        // }
        try {
            axios.put("https://gig-worker-backend.azurewebsites.net/Business/UpdateBu",
                updatedata, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(res => {
                    if (res.status === 200) {
                        alert('Em đẹp lắm')
                    } else {
                        alert('Sum thing wong')
                    }
                })
        } catch (error) {
            alert("501 Not Implemented: Máy chủ không công nhận các phương thức yêu cầu hoặc không có khả năng xử lý nó.")
        }
    }
    console.log(city)

    return (
        <Container>
            {loading === false ?
                <Box>
                    {
                        param.id === undefined ?
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
                                        onChange={handleChange}
                                        name='province'>
                                        {provivince.map((option) => (
                                            <MenuItem key={option} value={option} >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    {select == undefined ? <div>Hãy chọn tỉnh trước</div> :
                                        <div>
                                            <TextField
                                                select
                                                label="Chọn Thành phố/Quận/Huyện"
                                                name='locationID'
                                                onChange={inputhandler}>

                                                {city?.map((option) => (
                                                    <MenuItem key={option?.locationID} value={option?.locationID}>
                                                        {option?.city}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
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
                                        <input type="file" onChange={uploadImage} className="filetype" />
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
                                        onChange={handleChange}
                                        name='province'>
                                        {provivince.map((option) => (
                                            <MenuItem key={option} value={option} >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    {select == undefined ? <div>Hãy chọn tỉnh trước</div> :
                                        <div>
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
                                    }
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
                                        <input type="file" onChange={uploadImage} className="filetype" />
                                    </div>
                                </div>
                                <div className='add-business-button'>
                                    <Button type='submit' onClick={handleUpdate}>Cập nhật</Button>
                                </div>
                            </Box>
                    } </Box> :
                <Box>
                </Box>}
        </Container>
    )
}

export default BusinessForm