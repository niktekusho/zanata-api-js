import { restifyUrl } from "./util";

describe("Restify function test suite", () => {
	it("test with simple url", () => {
		const url = "http://example.com";
		const expected = `${url}/rest`;
		expect(restifyUrl(url)).toEqual(expected);
	});

	it("test with simple url, ending with /", () => {
		const url = "http://example.com/";
		const expected = `${url}rest`;
		expect(restifyUrl(url)).toEqual(expected);
	});

	it("test with url following some kind path", () => {
		const url = "http://example.com/nowpath";
		const expected = `${url.replace("nowpath", "rest")}`;
		expect(restifyUrl(url)).toEqual(expected);
	});

	it("test with port-specific url", () => {
		const url = "http://example.com:8080";
		const expected = `${url}/rest`;
		expect(restifyUrl(url)).toEqual(expected);
	});

	describe("tests with malformed url", () => {
		it("missing protocol", () => {
			// should default to http
			const url = "example.com/";
			const expected = `http://${url}/rest`;
			expect(restifyUrl(url)).toEqual(expected);
		});

		it ("invalid domain name", () => {
			const url = "http://example,com:8080";
			const expected = `${url.replace(",com", "")}/rest`;
			expect(restifyUrl(url)).toEqual(expected);
		});
	});
});
