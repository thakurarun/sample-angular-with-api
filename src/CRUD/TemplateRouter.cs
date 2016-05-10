using Microsoft.AspNet.Http.Features;
using Microsoft.AspNet.Routing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Threading;
using Microsoft.AspNet.Http;
using System.IO;

namespace CRUD
{
    public class TemplateRouter : IRouter
    {
        public async Task RouteAsync(RouteContext context)
        {
            var url = context.RouteData.Values["url"] as string;
            if (string.IsNullOrEmpty(url))
                return;
            string decodedUrl = Uri.UnescapeDataString(url);
            var path = "../scripts/" + decodedUrl;
            if (File.Exists(path))
            {
                //this need to change either we can use cache to serve
                //static html or use IHttpSendFileFeature
                //http://docs.asp.net/en/latest/fundamentals/request-features.html
                var s =  File.ReadAllText(path);
                await context.HttpContext.Response.WriteAsync(s, context.HttpContext.RequestAborted);
            }
            context.IsHandled = true;
        }

        public VirtualPathData GetVirtualPath(VirtualPathContext context)
        {
            return null;
        }
    }
}
