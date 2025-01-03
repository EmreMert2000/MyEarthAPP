package com.example.myearthapp

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform