import "isomorphic-unfetch";
import nock from "nock";
import dotenv from "dotenv";
<%_ if (features.indexOf("axios") >= 0) { _%>
import httpAdapter from "axios/lib/adapters/http";
import axios from "axios";
<%_ } _%>

dotenv.config({ path: ".env.test" });

<%_ if (features.indexOf("axios") >= 0) { _%>
axios.defaults.adapter = httpAdapter;
<%_ } _%>

afterAll(() => {
    nock.cleanAll();
    nock.restore();
});