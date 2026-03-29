
package com.example.demo;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@RestController
public class TransactionController {

    @PostMapping("/transaction")
    public Map<String, String> processTransaction(@RequestBody Map<String, Object> payload) {

        // Call Notification Service
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.postForObject("http://notification-service:5000/notify", payload, String.class);

        Map<String, String> response = new HashMap<>();
        response.put("status", "Transaction Successful");

        return response;
    }
}
