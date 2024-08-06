/* eslint-disable react/no-unescaped-entities */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export const Project = () => {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Projects
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent web development projects, showcasing
              my skills in building responsive and user-friendly applications.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Todo App</CardTitle>
              <CardDescription>Lorem ipsum</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div>
                  <h3 className="text-lg font-bold">Key Features</h3>
                  <ul className="list-disc pl-4 text-muted-foreground">
                    <li>Add, edit, and delete tasks</li>
                    <li>Mark tasks as complete</li>
                    <li>Filter tasks by status (all, active, completed)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Technologies Used</h3>
                  <p className="text-muted-foreground">Lorem ipsum</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Challenges</h3>
                  <p className="text-muted-foreground">
                    Implementing the filtering functionality and ensuring that
                    the task data is persisted across page refreshes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Weather App</CardTitle>
              <CardDescription>
                A weather app that displays the current weather and forecast for
                a user's location.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div>
                  <h3 className="text-lg font-bold">Key Features</h3>
                  <ul className="list-disc pl-4 text-muted-foreground">
                    <li>Automatically detect user's location</li>
                    <li>Display current weather conditions</li>
                    <li>Show hourly and daily weather forecast</li>
                    <li>Option to search for weather in other locations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Technologies Used</h3>
                  <p className="text-muted-foreground">Lorem ipsum</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Challenges</h3>
                  <p className="text-muted-foreground">
                    Handling user location permissions and integrating the
                    weather API to display accurate and relevant data.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>E-commerce Website</CardTitle>
              <CardDescription>Lorem ipsum</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div>
                  <h3 className="text-lg font-bold">Key Features</h3>
                  <ul className="list-disc pl-4 text-muted-foreground">
                    <li>Browse and search for products</li>
                    <li>Add products to cart and manage the cart</li>
                    <li>Checkout process with payment integration</li>
                    <li>Admin dashboard to manage products and orders</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Technologies Used</h3>
                  <p className="text-muted-foreground">Lorem ipsum</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Challenges</h3>
                  <p className="text-muted-foreground">
                    Implementing a secure and user-friendly checkout process,
                    managing product inventory, and building the admin
                    dashboard.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Website</CardTitle>
              <CardDescription>Lorem ipsum</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div>
                  <h3 className="text-lg font-bold">Key Features</h3>
                  <ul className="list-disc pl-4 text-muted-foreground">
                    <li>Clean and modern design</li>
                    <li>Responsive layout for various devices</li>
                    <li>Detailed project showcases</li>
                    <li>Contact form for inquiries</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Technologies Used</h3>
                  <p className="text-muted-foreground">Lorem ipsum</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Challenges</h3>
                  <p className="text-muted-foreground">
                    Designing a visually appealing and user-friendly portfolio,
                    and implementing the contact form with validation and
                    submission handling.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
