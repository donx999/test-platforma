body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f4f8;
  height: 100vh;
  overflow: hidden;
}

.centered {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #0077cc, #004a80);
  color: white;
  gap: 15px;
}

.centered input {
  padding: 10px;
  width: 250px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  outline: none;
}

.centered button {
  padding: 10px 30px;
  background-color: #ffd700;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.centered button:hover {
  background-color: #ffbf00;
}

/* Asosiy container va sidebar */

.container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  width: 260px;
  background-color: #00264d;
  color: white;
  padding: 20px;
  overflow-y: auto;
}

.sidebar h2 {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  border-bottom: 1px solid white;
  padding-bottom: 10px;
  user-select: none;
}

.menu {
  list-style: none;
  padding: 0;
}

.menu li {
  padding: 10px 0;
  cursor: pointer;
  border-bottom: 1px dashed #aaa;
  user-select: none;
  transition: background-color 0.2s ease;
}

.menu li:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.main {
  flex-grow: 1;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.9);
  overflow-y: auto;
  position: relative;
}

.test-question {
  margin-bottom: 20px;
  padding: 10px;
  border-left: 5px solid #0077cc;
  background-color: #eef5ff;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #0077cc;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
}

button:hover {
  background-color: #005fa3;
}
