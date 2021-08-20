const app = require("./app");
const http = require("http");

const port = process.env.PORT || 1337;
app.on("DBConected", () => {
	http.createServer(app).listen(port, () => {
		console.log(`Server started at http://localhost:${port}`);
	});
});