import React from "react";

const Blog = () => {
  return (
    <div className="mx-auto mt-10">
      <h1 className="mx-auto text-xl ">
        Question No 1 : Differences between uncontrolled and controlled
        components.
      </h1>
      <h1 className="bg-red-200">
        ans : n the context of a system or process, uncontrolled components
        refer to elements that operate independently of any external influence,
        while controlled components are those that can be manipulated or
        regulated in order to achieve a desired outcome. Here are some specific
        differences between the two: Definition: Uncontrolled components are
        those that operate independently of any external influence, while
        controlled components are those that can be manipulated or regulated in
        order to achieve a desired outcome. Stability: Uncontrolled components
        are often less stable than controlled components, since they are not
        subject to any external control. This means that their behavior can be
        unpredictable and may vary over time. Controlled components, on the
        other hand, can be regulated to maintain a stable state. Performance:
        Uncontrolled components may perform differently depending on the
        environment in which they are located, while controlled components can
        be optimized for a specific performance metric. Interdependence:
        Uncontrolled components may be interdependent with other uncontrolled
        components, meaning that changes in one component can have unintended
        consequences on others. Controlled components are designed to be
        interdependent with other controlled components, and changes to one
        component can be made in a controlled manner to ensure that the overall
        system remains stable. Responsiveness: Controlled components are
        generally more responsive to changes in the system or environment than
        uncontrolled components, since they can be designed to respond to
        specific inputs or triggers.
      </h1>
      <h1 className="mt-16 mx-auto text-xl">
        Question No 2 : How to validate React props using PropTypes
      </h1>
      <h1 className="bg-green-200 mt-2">
        ans : In React, PropTypes is a mechanism for validating the data types
        of the props passed to a component. It is a useful tool for catching
        errors early and ensuring that components are used correctly. Here's how
        you can use PropTypes to validate React props.Validate Props: Once
        you've defined your PropTypes, React will automatically validate the
        props passed to your component based on the specified data types. If a
        prop has an incorrect data type or is missing, a warning message will be
        displayed in the console. For example, if you pass a string to
        anotherPropName in the above example, you will see a warning message in
        the console that says "Warning: Failed prop type: Invalid prop
        anotherPropNameof typestringsupplied toComponentName, expected number`."
      </h1>
      <h1 className="mt-16 mx-auto text-xl">
        Question No 3 : Difference between nodejs and express js
      </h1>
      <h1 className="bg-blue-200 mt-2">
        ans :Node.js and Express.js are both widely used technologies in web
        development, but they serve different purposes. Node.js is a runtime
        environment for JavaScript, while Express.js is a framework built on top
        of Node.js that provides additional features and functionalities for
        building web applications. Here are some specific differences between
        Node.js and Express.js: Purpose: Node.js is a runtime environment for
        executing JavaScript code outside of a web browser, while Express.js is
        a framework for building web applications on top of Node.js. Node.js
        provides a platform for executing JavaScript code, while Express.js
        provides a set of tools and features for building web applications.
        Functionality: Node.js provides a basic set of features and
        functionalities for executing JavaScript code, such as file system
        access and network communication. Express.js extends Node.js by
        providing additional features such as routing, middleware, and
        templating. Routing: Express.js provides a robust routing system that
        allows developers to define routes for handling HTTP requests. Node.js
        does not provide a routing system out of the box. Middleware: Express.js
        provides a middleware system that allows developers to write functions
        that can be executed before or after a request is handled. Middleware
        functions can modify the request or response objects, or perform other
        tasks such as authentication or logging. Node.js does not provide a
        middleware system out of the box. Templating: Express.js provides a
        templating engine that allows developers to render dynamic HTML pages.
        Node.js does not provide a templating engine out of the box.{" "}
      </h1>
      <h1 className="mt-16 mx-auto text-xl">
        Question No 4 : What is a custom hook, and why will you create a custom
        hook?
      </h1>
      <h1 className="bg-violet-200 mt-2">
        ans :In React, a custom hook is a function that allows you to reuse
        stateful logic across different components. A custom hook is created by
        extracting stateful logic from a component into a separate function that
        can be used by other components. Custom hooks are a powerful tool for
        reducing code duplication and increasing reusability in React
        applications. Here are some reasons why you might want to create a
        custom hook: Reusability: If you find yourself repeating the same
        stateful logic across different components, you can extract that logic
        into a custom hook and reuse it in other components. Abstraction: Custom
        hooks can abstract away complex stateful logic and provide a simpler
        interface for using that logic in a component. Composition: Custom hooks
        can be composed together to create more complex stateful logic. Testing:
        Custom hooks can be tested independently of components, making it easier
        to test the stateful logic in your application.{" "}
      </h1>
    </div>
  );
};

export default Blog;
