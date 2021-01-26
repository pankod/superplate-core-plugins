import "isomorphic-unfetch";
import nock from "nock";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
<%_ if (features.indexOf("axios") >= 0) { _%>
import httpAdapter from "axios/lib/adapters/http";
import axios from "axios";
<%_ } _%>
<%_ if (features.indexOf("env") >= 0) { _%>
import dotenv from "dotenv";
<%_ } _%>

<%_ if (features.indexOf("env") >= 0) { _%>
dotenv.config({ path: ".env.test" });
<%_ } _%>

<%_ if (features.indexOf("axios") >= 0) { _%>
axios.defaults.adapter = httpAdapter;
<%_ } _%>

Enzyme.configure({ adapter: new Adapter() });
    
afterAll(() => {
    nock.cleanAll();
    nock.restore();
});