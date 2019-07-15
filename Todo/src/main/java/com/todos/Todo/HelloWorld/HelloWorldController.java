package com.todos.Todo.HelloWorld;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {
		
		//GET
		//URI - /helloWorld
		// method - "Hello World"
	
	
	
	@GetMapping(path="/helloWorldBean")
	public HelloWorldBean  helloWorldBean() {
		return new HelloWorldBean("Hello World Bean is here");
	}
	

}
