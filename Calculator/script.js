function Solve(value) {
    document.getElementById('display').value += value;
  }

  function Clear() {
    document.getElementById('display').value = '';
  }

  function Back() {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
  }

  function Result() {
    try {
      document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }