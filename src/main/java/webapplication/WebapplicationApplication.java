package webapplication;

import webapplication.service.book.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WebapplicationApplication {
	@Autowired
	private BookService bookService;

	public static void main(String[] args) {
		SpringApplication.run(WebapplicationApplication.class, args);
	}

}
