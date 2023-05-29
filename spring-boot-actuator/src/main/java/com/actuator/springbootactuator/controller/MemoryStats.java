package com.actuator.springbootactuator.controller;


import lombok.Data;

@Data
public class MemoryStats {
    private Long heapSize;
    private Long heapMaxSize;
    private Long heapFreeSize;
}
