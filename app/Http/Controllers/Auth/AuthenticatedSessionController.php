<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Auth\AuthManager;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;
use \Symfony\Component\HttpFoundation\Response;

class AuthenticatedSessionController extends Controller
{
    public function login(LoginRequest $request) {
        $request->authenticate();
        $request->session()->regenerate();
        return response()->json('authorized', Response::HTTP_OK);
    }

    public function checkAuthenticated(Request $request) {
        if (Auth::user()) {
            return response()->json(['isAuthenticated' => true], Response::HTTP_OK);
        }
        return response()->json(['isAuthenticated' => false], Response::HTTP_OK);
    }

    public function logout(Request $request) {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json('authorized', Response::HTTP_OK);
    }
}
