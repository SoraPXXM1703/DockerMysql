// CompanyDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const CompanyDetailPage = () => {
    const { companyName } = useParams();

    return (
        <div className="container">
            <h1>รายละเอียดบริษัท: {companyName}</h1>
            <p>ข้อมูลเพิ่มเติมของบริษัทนี้จะอยู่ในหน้านี้</p>
            {/* เพิ่มข้อมูลรายละเอียดบริษัทได้ตามต้องการ */}
        </div>
    );
};

export default CompanyDetailPage;
