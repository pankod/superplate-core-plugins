<%_ if (features.indexOf("axios") >= 0) { _%>
import httpAdapter from "axios/lib/adapters/http";
import axios from "axios";
<%_ } _%>

<%_ if (features.indexOf("axios") >= 0) { _%>
axios.defaults.adapter = httpAdapter;
<%_ } _%>