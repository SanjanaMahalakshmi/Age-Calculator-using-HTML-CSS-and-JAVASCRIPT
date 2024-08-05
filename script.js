document.getElementById('ageCalculator').addEventListener('submit', function(e) {
    e.preventDefault();
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    
    let age = today.getFullYear() - birthdate.getFullYear();
    const month = today.getMonth() - birthdate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    
    document.getElementById('result').textContent = `Your age is ${age} years.`;
});
