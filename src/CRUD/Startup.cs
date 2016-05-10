using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNet.Routing;
using Microsoft.AspNet.Routing.Template;
using Microsoft.AspNet.StaticFiles;
using Microsoft.AspNet.FileProviders;

namespace CRUD
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddRouting();
            // Add the platform handler to the request pipeline.
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app)
        {

            app.UseMvc(rb =>
            {
                rb.MapRoute(
                    name: "default",
                    template: "{controller}/{action}/{id?}",
                    defaults: new { controller = "Home", action = "Index" });
            });

            app.UseIISPlatformHandler();

            app.UseDefaultFiles();
            app.UseStaticFiles();
            var routeBuilder = new RouteBuilder();
            routeBuilder.ServiceProvider = app.ApplicationServices;

            routeBuilder.Routes.Add(new TemplateRoute(
                new TemplateRouter(),
                "gettemplate/url={url}",
                app.ApplicationServices.GetService<IInlineConstraintResolver>()));

            app.UseRouter(routeBuilder.Build());


            //app.Run(async (context) =>
            //{
            //    await context.Response.WriteAsync("Hello World!");
            //});
        }

        // Entry point for the application.
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
