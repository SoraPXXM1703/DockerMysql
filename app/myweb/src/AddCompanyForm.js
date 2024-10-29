import React, { useState } from 'react';
import './AddCompanyForm.css';

const AddCompanyForm = () => {
  const [formData, setFormData] = useState({
    url: '',
    name: '',
    website: '',
    totalEmployees: '',
    seniorEmployees: '',
    emails: '',
    personalEmailCount: '',
    phonesCount: '',
    addressesCount: '',
    investorCount: '',
    clientsCount: '',
    partnersCount: '',
    changesCount: '',
    peopleChangeCount: '',
    contactChangesCount: '',
    descriptionShort: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNumberChange = (e) => {
    const { name, value } = e.target;
    // ตรวจสอบให้แน่ใจว่าเป็นตัวเลขเท่านั้น
    if (!isNaN(value) || value === '') {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('Submission Successful!');    
    setTimeout(() => {
      setSuccessMessage('');
      setFormData({ 
        url: '',
        name: '',
        website: '',
        totalEmployees: '',
        seniorEmployees: '',
        emails: '',
        personalEmailCount: '',
        phonesCount: '',
        addressesCount: '',
        investorCount: '',
        clientsCount: '',
        partnersCount: '',
        changesCount: '',
        peopleChangeCount: '',
        contactChangesCount: '',
        descriptionShort: '',
      });
    }, 5000);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Add New Company Data</h1>
      <form className="add-company-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Company Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter company name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="url">Company URL</label>
          <input
            type="text"
            id="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            required
            placeholder="Enter company URL"
          />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            required
            placeholder="Enter company website"
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalEmployees">Total Employees</label>
          <input
            type="number"
            id="totalEmployees"
            name="totalEmployees"
            value={formData.totalEmployees}
            onChange={handleNumberChange}
            required
            placeholder="Enter total number of employees"
          />
        </div>
        <div className="form-group">
          <label htmlFor="seniorEmployees">Senior Employees</label>
          <input
            type="number"
            id="seniorEmployees"
            name="seniorEmployees"
            value={formData.seniorEmployees}
            onChange={handleNumberChange}
            required
            placeholder="Enter number of senior employees"
          />
        </div>
        <div className="form-group">
          <label htmlFor="emails">Company Emails</label>
          <input
            type="text"
            id="emails"
            name="emails"
            value={formData.emails}
            onChange={handleChange}
            required
            placeholder="Enter company emails"
          />
        </div>
        <div className="form-group">
          <label htmlFor="personalEmailCount">Personal Email Count</label>
          <input
            type="number"
            id="personalEmailCount"
            name="personalEmailCount"
            value={formData.personalEmailCount}
            onChange={handleNumberChange}
            required
            placeholder="Enter number of personal emails"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phonesCount">Phone Count</label>
          <input
            type="number"
            id="phonesCount"
            name="phonesCount"
            value={formData.phonesCount}
            onChange={handleNumberChange}
            required
            placeholder="Enter number of phones"
          />
        </div>
        <div className="form-group">
          <label htmlFor="addressesCount">Address Count</label>
          <input
            type="number"
            id="addressesCount"
            name="addressesCount"
            value={formData.addressesCount}
            onChange={handleNumberChange}
            required
            placeholder="Enter number of addresses"
          />
        </div>
        <div className="form-group">
          <label htmlFor="investorCount">Investor Count</label>
          <input
            type="number"
            id="investorCount"
            name="investorCount"
            value={formData.investorCount}
            onChange={handleNumberChange}
            required
            placeholder="Enter number of investors"
          />
        </div>
        <div className="form-group">
          <label htmlFor="clientsCount">Client Count</label>
          <input
            type="number"
            id="clientsCount"
            name="clientsCount"
            value={formData.clientsCount}
            onChange={handleNumberChange}
            required
            placeholder="Enter number of clients"
          />
        </div>
        <div className="form-group">
          <label htmlFor="partnersCount">Partner Count</label>
          <input
            type="number"
            id="partnersCount"
            name="partnersCount"
            value={formData.partnersCount}
            onChange={handleNumberChange}
            required
            placeholder="Enter number of partners"
          />
        </div>
        <div className="form-group">
          <label htmlFor="changesCount">Change Count</label>
          <input
            type="number"
            id="changesCount"
            name="changesCount"
            value={formData.changesCount}
            onChange={handleNumberChange}
            required
            placeholder="Enter number of changes"
          />
        </div>
        <div className="form-group">
          <label htmlFor="peopleChangeCount">People Change Count</label>
          <input
            type="number"
            id="peopleChangeCount"
            name="peopleChangeCount"
            value={formData.peopleChangeCount}
            onChange={handleNumberChange}
            required
            placeholder="Enter number of people changes"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactChangesCount">Contact Change Count</label>
          <input
            type="number"
            id="contactChangesCount"
            name="contactChangesCount"
            value={formData.contactChangesCount}
            onChange={handleNumberChange}
            required
            placeholder="Enter number of contact changes"
          />
        </div>
        <div className="form-group">
          <label htmlFor="descriptionShort">Short Description</label>
          <input
            type="text"
            id="descriptionShort"
            name="descriptionShort"
            value={formData.descriptionShort}
            onChange={handleChange}
            required
            placeholder="Enter a short description"
          />
        </div>
        <button type="submit">Submit Data</button>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
      {successMessage && (
        <div className="submitted-data">
          <h3>Submitted Data:</h3>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default AddCompanyForm;
